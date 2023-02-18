import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatInfo } from './consts';

const initialState: ChatInfo = {
    id: '',
    name: '',
    description: '',
    createdAt: '',
    creatorId: '',
    updatedAt: ''
};

const selectedChat = createSlice({
    name: 'selectedChat',
    initialState,
    reducers: {
        selectChat: (state: ChatInfo, action: PayloadAction<ChatInfo>) => ({
            ...action.payload
        }),
        reset: () => initialState
    }
});

export const selectedChatReducer = selectedChat.reducer;
export const selectedChatActions = selectedChat.actions;
