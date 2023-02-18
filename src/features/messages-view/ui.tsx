import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { camelizeKeys, Decamelized } from 'humps';

import { useAppSelector } from 'shared/hooks';
import { parseToken } from 'entities/user';
import {
    Message,
    MessageCenter,
    MessageRowLeft,
    MessageRowRight,
    StoreMessage,
    useListenSocketChannelQuery
} from 'entities/message';
import { useLazyGetChatMembersQuery, useLazyGetChatMessagesQuery } from './api';

interface MessageViewProps {
    selectedChatId: string;
}

const MessagesView: React.FC<MessageViewProps> = ({ selectedChatId }) => {
    const token = useAppSelector(state => state.userAuthSlice);
    const [getChatMessages, { data: apiMessages }] = useLazyGetChatMessagesQuery();
    const [getChatMembers, { data: membersData }] = useLazyGetChatMembersQuery();
    const { data: socketMessages } = useListenSocketChannelQuery();

    const userId = parseToken(token).sub;

    useEffect(() => {
        getChatMessages({ token, data: { chatId: selectedChatId } });
        getChatMembers({ token, data: selectedChatId });
    }, [selectedChatId]);

    // TODO: put this code in utils
    const renderMessage = (message: StoreMessage): React.ReactNode => {
        // TODO: put this code in utils
        const dateSend = message.createdAt ? new Date(message.createdAt) : undefined;
        const minutes = dateSend ? `0${dateSend.getMinutes()}`.slice(-2) : '--';
        const hours = dateSend ? `0${dateSend.getHours()}`.slice(-2) : '--';
        const timeSend = `${hours}:${minutes}`;

        if (message.senderId === userId) {
            return <MessageRowRight key={message.id} text={message.text} timestamp={timeSend} />;
        }

        if (message.actionId > 1) {
            return <MessageCenter key={message.id}>{message.text}</MessageCenter>;
        }

        const username =
            membersData?.list.filter(member => member.user_id === message.senderId)[0]?.username ??
            'unknown';
        return (
            <MessageRowLeft
                key={message.id}
                username={username}
                photoUrl={username[0].toUpperCase()}
                text={message.text}
                timestamp={timeSend}
            />
        );
    };

    return (
        <Layout>
            {!!apiMessages && apiMessages.result.length > 0 ? (
                apiMessages.result.map(message => {
                    const camelizedMsg = camelizeKeys<Decamelized<Message>>(message);
                    const storeMsg: StoreMessage = {
                        ...camelizedMsg,
                        createdAt: message?.created_at && new Date(message.created_at).getTime()
                    };
                    return renderMessage(camelizeKeys<StoreMessage>(storeMsg));
                })
            ) : (
                <MessageCenter>There is no messages yet :(</MessageCenter>
            )}
            {!!socketMessages &&
                socketMessages.length > 0 &&
                socketMessages.map(socketMessage => renderMessage(socketMessage))}
        </Layout>
    );
};

export default MessagesView;

const Layout = styled('div')`
    margin: 0 3rem;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
`;
