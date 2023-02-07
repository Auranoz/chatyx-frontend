import apiSlice from 'shared/api';
import { AuthInputData, UserLogin } from 'entities/user';
import { SignInResponse } from '../consts';

export const signInApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation<SignInResponse, AuthInputData<UserLogin>>({
            query: params => ({
                url: 'auth/sign-in',
                method: 'POST',
                body: params.authData,
                headers: { 'X-Fingerprint': params.fingerprint }
            })
        }),
        refresh: build.mutation<SignInResponse, AuthInputData>({
            query: params => ({
                url: 'auth/refresh',
                method: 'POST',
                headers: { 'X-Fingerprint': params.fingerprint }
            })
        })
    })
});

export const { useSignInMutation, useRefreshMutation } = signInApi;
