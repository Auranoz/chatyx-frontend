import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

import { useLazyCreateSocketChannelQuery } from 'entities/message';
import { useAppSelector } from 'shared/hooks';
import { ChatBox } from 'entities/chats';
import MessagesView from 'features/messages-view';
import MessageSend from 'features/message-send';

const Conversation: React.FC = () => {
    const token = useAppSelector(state => state.userAuthSlice);
    const selectedChat = useAppSelector(state => state.selectedChatSlice);
    const [createSocketConnection, { isSuccess }] = useLazyCreateSocketChannelQuery();
    let content: ReactNode;

    if (selectedChat.id && selectedChat.name) {
        content = (
            <ChatBox chat={selectedChat} bottom={<MessageSend selectedChatId={selectedChat.id} />}>
                <MessagesView selectedChatId={selectedChat.id} />
            </ChatBox>
        );
    }

    React.useEffect(() => {
        if (!isSuccess) {
            createSocketConnection(token);
        }
    }, [isSuccess]);

    return <Layout>{content}</Layout>;
};

export default Conversation;

const Layout = styled('div')`
    grid-area: conversation;
    max-height: 100vh;
    background: rgb(210, 210, 210);
    background: radial-gradient(circle, rgba(210, 210, 210, 1) 0%, rgba(251, 251, 251, 1) 100%);
    border-radius: 0.5rem;
`;
