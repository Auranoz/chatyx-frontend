import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import { ChatInfo } from '../../consts';

interface Props {
    chat: ChatInfo;
}

export const ChatRow: React.FC<Props> = ({ chat }) => {
    const { id, name } = chat;

    return (
        <CardLayout key={id}>
            <ActionWrapper>
                <AvatarStyle>{name[0].toUpperCase()}</AvatarStyle>
                <ContentStyle>
                    <TitleStyle>{name}</TitleStyle>
                </ContentStyle>
            </ActionWrapper>
        </CardLayout>
    );
};

const CardLayout = styled(Card)`
    background-color: inherit;
    border-radius: 0.5rem;
    border-bottom: 1px solid gray;
    max-height: 4rem;
    height: 100%;
    width: 100%;
`;

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
