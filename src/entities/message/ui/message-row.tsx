import React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

interface OwnMessageProps {
    text: string;
    timestamp: string;
}

interface LeftMessageProps extends OwnMessageProps {
    username: string;
    photoUrl: string;
}

export const MessageRowLeft: React.FC<LeftMessageProps> = ({
    text,
    username,
    photoUrl,
    timestamp
}) => {
    return (
        <MessageRow>
            <Avatar src={photoUrl} alt={username[0]} />
            <Wrapper>
                <DisplayUsername>{username}</DisplayUsername>
                <LeftMessageWrapper>
                    {text}
                    <MessageTimeStampRight>{timestamp}</MessageTimeStampRight>
                </LeftMessageWrapper>
            </Wrapper>
        </MessageRow>
    );
};

export const MessageRowRight: React.FC<OwnMessageProps> = ({ text, timestamp }) => {
    return (
        <MessageRight>
            <RightMessageWrapper>
                {text}
                <MessageTimeStampRight>{timestamp}</MessageTimeStampRight>
            </RightMessageWrapper>
        </MessageRight>
    );
};

const MessageRow = styled('div')`
    display: flex;
`;

const Wrapper = styled('div')`
    width: 60%;
`;

const DisplayUsername = styled('div')`
    margin-left: 1rem;
    font-weight: bold;
`;

const LeftMessageWrapper = styled('div')`
    position: relative;
    margin-left: 20px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #a8ddfd;
    width: 60%;
    text-align: left;
    border: 1px solid #97c6e3;
    border-radius: 10px;
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 15px solid #a8ddfd;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        top: 0;
        left: -15px;
    }
    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 17px solid #97c6e3;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        top: -1px;
        left: -17px;
    }
`;

const RightMessageWrapper = styled('div')`
    position: relative;
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f8e896;
    width: 60%;
    text-align: left;
    border: 1px solid #dfd087;
    border-radius: 10px;
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 15px solid #f8e896;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        top: 0;
        right: -15px;
    }
    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-top: 17px solid #dfd087;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        top: -1px;
        right: -17px;
    }
`;

const MessageTimeStampRight = styled('div')`
    position: absolute;
    font-size: 0.85em;
    font-weight: 300;
    margin-top: 10px;
    bottom: -3px;
    right: 5px;
`;

const MessageRight = styled(MessageRow)`
    justify-content: flex-end;
`;

export const MessageCenter = styled(MessageRow)`
    justify-content: center;
`;
