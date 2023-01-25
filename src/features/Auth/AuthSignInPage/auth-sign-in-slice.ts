import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignInState } from 'features/typings';

const initialState: SignInState = {
    username: '',
    password: ''
};

const authSignInSlice = createSlice({
    name: 'authSlice',
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

export const authSignInActions = authSignInSlice.actions;
export const authSignInReducer = authSignInSlice.reducer;
