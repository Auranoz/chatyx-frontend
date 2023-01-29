import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignInState } from '../consts';

const initialState: SignInState = {
    username: '',
    password: ''
};

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {
        handleInputLogin: (state: SignInState, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        handleInputPassword: (state: SignInState, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    }
});

export const signInActions = signInSlice.actions;
export const signInReducer = signInSlice.reducer;
