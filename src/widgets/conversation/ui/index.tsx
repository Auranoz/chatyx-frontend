import * as React from 'react';
import { styled } from '@mui/material/styles';

const Conversation: React.FC = () => {
    return <Layout>Test</Layout>;
};

export default Conversation;

const Layout = styled('div')`
    display: none;
    grid-area: conversation;
`;
