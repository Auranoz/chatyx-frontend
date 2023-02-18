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
    height: 100vh;
    display: grid;
    grid-template-areas: 'chats-list conversation';
    grid-template-columns: 400px 1fr;
`;
