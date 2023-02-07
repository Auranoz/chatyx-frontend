import { combineReducers, configureStore } from '@reduxjs/toolkit';

import apiSlice from 'shared/api';
import { fingerprintReducer, userTokenReducer } from 'entities/user';
import { signInReducer } from 'features/sign-in';
import { signUpReducer } from 'features/sign-up';
import { chatCreateReducer } from 'features/chat-create';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    fingerprintSlice: fingerprintReducer,
    userAuthSlice: userTokenReducer,
    signInSlice: signInReducer,
    signUpSlice: signUpReducer,
    chatCreateSlice: chatCreateReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
