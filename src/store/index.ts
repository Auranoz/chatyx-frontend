import { combineReducers, configureStore } from '@reduxjs/toolkit';

import apiSlice from './api-slice';
import { authSignInReducer } from '../features/Auth/AuthSignInPage/auth-sign-in-slice';
import { authFingerprintReducer } from '../features/Auth/auth-fingerprint-slice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    authSlice: authSignInReducer,
    fingerprintSlice: authFingerprintReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
export type TStoreState = ReturnType<typeof store.getState>;
