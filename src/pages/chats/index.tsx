import * as React from 'react';
import { styled } from '@mui/material/styles';

import ChatsList from 'widgets/chats-list';
import Conversation from 'widgets/conversation';

const ChatsPage: React.FC = () => (
    <Layout>
        <ChatsList />
        <Conversation />
    </Layout>
);

export default ChatsPage;

const Layout = styled('div')`
    display: flex;
    height: 100vh;
    width: 100%;
`;
