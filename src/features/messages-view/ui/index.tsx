import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';

import { useAppSelector } from 'shared/hooks';
import { parseToken } from 'entities/user';
import { MessageCenter, useListenSocketChannelQuery } from 'entities/message';
import { useLazyGetChatMembersQuery, useLazyGetChatMessagesQuery } from '../api';
import MessageItem from './message-item';
import { buildListMessages } from '../utils';

interface MessageViewProps {
    selectedChatId: string;
}

const MessagesView: React.FC<MessageViewProps> = ({ selectedChatId }) => {
    const token = useAppSelector(state => state.userAuthSlice);
    const [getChatMessages, { data: apiMessages, isLoading: isLoadingMessages }] =
        useLazyGetChatMessagesQuery();
    const [getChatMembers, { data: membersData, isLoading: isLoadingMembers }] =
        useLazyGetChatMembersQuery();
    const { data: socketMessages } = useListenSocketChannelQuery();
    const currentChatSocketMessages = socketMessages?.filter(msg => msg.chatId === selectedChatId);

    const userId = parseToken(token).sub;
    const contentMessages = buildListMessages(apiMessages?.result, currentChatSocketMessages);
    const messagesEndRef = useRef<null | HTMLDivElement>();

    useEffect(() => {
        getChatMessages({ token, data: { chatId: selectedChatId } });
        getChatMembers({ token, data: selectedChatId });
    }, [selectedChatId]);

    useEffect(() => {
        scrollToBottom();
    }, [contentMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    };

    if (!apiMessages || isLoadingMessages || !membersData || isLoadingMembers) {
        return <>Loading...</>;
    }

    return (
        <Layout>
            {contentMessages.length > 0 ? (
                contentMessages.map(msg => (
                    <MessageItem key={msg.id} message={msg} members={membersData} userId={userId} />
                ))
            ) : (
                <MessageCenter>There is no messages yet</MessageCenter>
            )}
            <MessagesEnd ref={messagesEndRef} />
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

const MessagesEnd = styled('div')``;
