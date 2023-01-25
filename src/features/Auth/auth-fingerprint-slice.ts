import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authFingerprintSlice = createSlice({
    name: 'fingerprintSlice',
    initialState: '',
    reducers: {
        setFingerprint: (state, action: PayloadAction<string>) => action.payload
    }
});

export const authFingerprintActions = authFingerprintSlice.actions;
export const authFingerprintReducer = authFingerprintSlice.reducer;
