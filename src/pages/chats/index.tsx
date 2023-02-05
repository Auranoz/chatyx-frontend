import * as React from 'react';
import { styled } from '@mui/material/styles';

import ChatsBox from 'widgets/chats-box';

const ChatsPage: React.FC = () => (
    <Layout>
        <ChatsBox />
        <Conversation />
        <MessageInput />
    </Layout>
);

export default ChatsPage;

const Layout = styled('div')`
    height: 100vh;
    display: grid;
    grid-template-areas: 'chats-box conversation' 'chats-box message-input';
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr 50px;
`;

const Conversation = styled('div')`
    grid-area: conversation;
    padding: 50px;
    border: 1px solid black;
`;

const MessageInput = styled('div')`
    grid-area: message-input;
    border: 1px solid black;
`;
