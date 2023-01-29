import { combineReducers, configureStore } from '@reduxjs/toolkit';

import apiSlice, { fingerprintReducer } from 'shared/api';
import { signInReducer } from 'pages';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    signInSlice: signInReducer,
    fingerprintSlice: fingerprintReducer
});

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
