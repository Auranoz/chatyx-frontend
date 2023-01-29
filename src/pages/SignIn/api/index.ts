import apiSlice from 'shared/api';
import { SignInResponse, SignInState, AuthInputData } from '../consts';

export const authSignInApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation<SignInResponse, AuthInputData<SignInState>>({
            query: params => ({
                url: 'auth/sign-in',
                method: 'POST',
                body: params.authData,
                headers: {
                    'X-Fingerprint': params.fingerprint
                }
            })
        }),
        refresh: build.mutation<SignInResponse, AuthInputData<string>>({
            query: params => ({
                url: 'auth/refresh',
                method: 'POST',
                body: {
                    refresh_token: params.authData
                },
                headers: {
                    'X-Fingerprint': params.fingerprint
                }
            })
        })
    })
});

export const { useSignInMutation } = authSignInApi;
