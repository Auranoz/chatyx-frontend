import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { ChatInfo } from '../consts';

interface Props {
    chat: ChatInfo;
    onChatRowClick: (chat: ChatInfo) => unknown;
    isSelected: boolean;
}

export const ChatRow: React.FC<Props> = ({ chat, onChatRowClick, isSelected }) => {
    const { id, name } = chat;

    return (
        <CardLayout key={id} onClick={() => onChatRowClick(chat)} isSelected={isSelected}>
            <ActionWrapper>
                <AvatarStyle>{name[0].toUpperCase()}</AvatarStyle>
                <ContentStyle>
                    <TitleStyle>{name}</TitleStyle>
                </ContentStyle>
            </ActionWrapper>
        </CardLayout>
    );
};

const CardLayout = styled(Card, { shouldForwardProp: prop => prop !== 'isSelected' })<{
    isSelected: boolean;
}>(({ isSelected }) => ({
    backgroundColor: isSelected ? 'darkgray' : 'inherit',
    transition: 'background-color 500ms linear',
    borderRadius: '0.5rem',
    borderBottom: '1px solid gray',
    maxHeight: '4rem',
    height: '100%',
    width: '100%'
}));

const ActionWrapper = styled(CardActionArea)`
    display: flex;
    align-items: center;
    justify-content: unset;
    height: 100%;
    padding: 0.5rem;
`;

const AvatarStyle = styled(Avatar)`
    width: 3rem;
    height: 3rem;
    background-color: darkgray;
    border: 1px solid #9e9e9e;
` as typeof Avatar;

const ContentStyle = styled('div')`
    height: 100%;
    display: flex;
    align-items: flex-start;
    width: fit-content;
    margin-left: 2rem;
`;

const TitleStyle = styled('div')`
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
