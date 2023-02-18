import React, { FormEvent } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import { useActions, useAppSelector } from 'shared/hooks';
import { CreateMessageDTO, useSendSocketMessageMutation } from 'entities/message';
import { messageSendActions } from './model';

interface SendMessageProps {
    selectedChatId: string;
}

const MessageSend: React.FC<SendMessageProps> = ({ selectedChatId }) => {
    const { handleChangeMessage, reset } = useActions(messageSendActions);
    const value = useAppSelector(state => state.messageSendSlice);
    const [sendSocketMessage] = useSendSocketMessageMutation();

    const message: CreateMessageDTO = {
        text: value,
        chatId: selectedChatId
    };

    const sendMessage = (event: FormEvent) => {
        event.preventDefault();
        sendSocketMessage(message);
        reset();
    };

    return (
        <Layout component="form" onSubmit={sendMessage}>
            <InputField
                fullWidth
                value={value}
                onChange={e => handleChangeMessage(e.target.value)}
            />
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={sendMessage}>
                <SendIcon />
            </IconButton>
        </Layout>
    );
};

export default MessageSend;

const Layout = styled(Paper)`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 0.5rem;
` as typeof Paper;

const InputField = styled(InputBase)`
    padding: 0.5rem 1rem;
` as typeof InputBase;
