import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { ChatInfo } from '../consts';

interface Props {
    chat: ChatInfo;
    bottom: React.ReactNode;
}

export const ChatBox: React.FC<PropsWithChildren<Props>> = ({ children, chat, bottom }) => {
    const { name, description } = chat;

    return (
        <Layout>
            <ChatTitleWrapper>
                <TitleWrapper>{name}</TitleWrapper>
                <DescriptionWrapper>{description}</DescriptionWrapper>
            </ChatTitleWrapper>
            <ChildrenContentContainer>{children}</ChildrenContentContainer>
            <BottomWrapper>{bottom}</BottomWrapper>
        </Layout>
    );
};

const Layout = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 0 2rem;
    height: 100%;
    background-color: lightgray;
`;

const ChatTitleWrapper = styled('div')`
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleWrapper = styled('div')`
    font-weight: bold;
`;

const DescriptionWrapper = styled('div')`
    font-weight: normal;
`;

const ChildrenContentContainer = styled(Paper)`
    height: 75%;
    // border: 1px solid silver;
    border-radius: 0.5rem;
    background-color: gainsboro;
` as typeof Paper;

const BottomWrapper = styled('div')`
    height: 10%;
`;
