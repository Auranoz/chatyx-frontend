import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userAccessToken = createSlice({
    name: 'userAuthInfo',
    initialState: '',
    reducers: {
        setUserToken: (state: string, action: PayloadAction<string>) => action.payload
    }
});

export const userTokenReducer = userAccessToken.reducer;
export const userTokenAction = userAccessToken.actions;
