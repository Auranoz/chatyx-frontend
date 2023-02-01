import apiSlice from 'shared/api';

import { SignUpResponse, SignUpState } from '../consts';

export const SignUpApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        signUp: build.mutation<SignUpResponse, SignUpState>({
            query: body => ({
                url: 'users',
                method: 'POST',
                body
            })
        })
    })
});

export const { useSignUpMutation } = SignUpApi;
