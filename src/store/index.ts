import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/sign-in-slice';

const rootReducer = combineReducers({
    authSlice: authReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
export type TStoreState = ReturnType<typeof store.getState>;
