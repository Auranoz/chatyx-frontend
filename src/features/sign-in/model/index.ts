import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserLogin } from 'entities/user';

const initialState: UserLogin = {
    username: '',
    password: ''
};

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {
        handleInputLogin: (state: UserLogin, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        handleInputPassword: (state: UserLogin, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        reset: () => initialState
    }
});

export const signInActions = signInSlice.actions;
export const signInReducer = signInSlice.reducer;
