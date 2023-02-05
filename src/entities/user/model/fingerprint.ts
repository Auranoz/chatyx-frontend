import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const fingerprintSlice = createSlice({
    name: 'fingerprintSlice',
    initialState: '',
    reducers: {
        setFingerprint: (state, action: PayloadAction<string>) => action.payload
    }
});

export const fingerprintActions = fingerprintSlice.actions;
export const fingerprintReducer = fingerprintSlice.reducer;
