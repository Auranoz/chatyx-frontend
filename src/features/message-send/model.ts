import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const messageSend = createSlice({
    name: 'messageSend',
    initialState: '',
    reducers: {
        handleChangeMessage: (state: string, action: PayloadAction<string>) => action.payload,
        reset: () => ''
    }
});

export const messageSendReducer = messageSend.reducer;
export const messageSendActions = messageSend.actions;
