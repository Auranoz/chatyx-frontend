import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateChatParams } from 'entities/chats';

const initialState: CreateChatParams = {
    name: '',
    description: ''
};

const chatCreateSlice = createSlice({
    name: 'chatCreateSlice',
    initialState,
    reducers: {
        handleInputName: (state: CreateChatParams, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        handleInputDescription: (state: CreateChatParams, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        reset: () => initialState
    }
});

export const chatCreateActions = chatCreateSlice.actions;
export const chatCreateReducer = chatCreateSlice.reducer;
