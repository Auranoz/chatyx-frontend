import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface Props {
    children: JSX.Element[];
}

export const ChatBox: React.FC<Props> = ({ children }) => {
    return (
        <Layout>
            <ChatTitleWrapper>{children[0]}</ChatTitleWrapper>
            <ChildrenContentContainer>{children[1]}</ChildrenContentContainer>
            <BottomWrapper>{children[2]}</BottomWrapper>
        </Layout>
    );
};

const Layout = styled('div')`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    height: 100%;
    background-color: transparent;
`;

const ChatTitleWrapper = styled(Paper)`
    z-index: 1;
    height: 3rem;
    border-radius: 0.5rem;
`;

const ChildrenContentContainer = styled('div')`
    height: calc(100% - (3rem + 3rem));
    background-color: transparent;
` as typeof Paper;

const BottomWrapper = styled(Paper)`
    height: 3rem;
    border-radius: 0.5rem;
`;
