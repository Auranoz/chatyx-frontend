import React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

import { configureAvatarName } from 'shared/utils';
import { ChatInfo } from '../consts';

interface ChatTitleProps {
    chat: ChatInfo;
    children: JSX.Element;
}

export const ChatTitle: React.FC<ChatTitleProps> = ({ children, chat }) => {
    const { name, description } = chat;
    const chatAvatarName = configureAvatarName(name);

    return (
        <Layout>
            <LeftSide>
                <Avatar>{chatAvatarName}</Avatar>
                <ChatLabelWrapper>
                    <Title>{name}</Title>
                    <Description>{description}</Description>
                </ChatLabelWrapper>
            </LeftSide>
            <RightSide>{children}</RightSide>
        </Layout>
    );
};

const Layout = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem;
    width: 100%;
    height: 100%;
`;

const LeftSide = styled('div')`
    display: flex;
    margin-left: 0.5rem;
    align-items: center;
`;

const ChatLabelWrapper = styled('div')`
    margin-left: 0.5rem;
    line-height: 1.1rem;
`;

const Title = styled('div')`
    font-weight: bold;
`;

const Description = styled('div')`
    color: gray;
    font-size: small;
`;

const RightSide = styled('div')`
    margin-right: 0.5rem;
`;
