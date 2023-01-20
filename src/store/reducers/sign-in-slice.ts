import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    login: string;
    password: string;
}

const initialState: AuthState = {
    login: '',
    password: ''
};

const signInSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        handleInputLogin: (
            state: AuthState,
            action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
        ) => {
            state.login = action.payload.target.value;
        },
        handleInputPassword: (
            state: AuthState,
            action: PayloadAction<React.ChangeEvent<HTMLInputElement>>
        ) => {
            state.password = action.payload.target.value;
        }
    }
});

export const authActions = signInSlice.actions;
export const authReducer = signInSlice.reducer;
