import apiSlice from 'shared/api';

import { UserRegister } from 'entities/user';
import { SignUpResponse } from '../consts';

const SignUpApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        signUp: build.mutation<SignUpResponse, UserRegister>({
            query: body => ({
                url: 'users',
                method: 'POST',
                body
            })
        })
    })
});

export const { useSignUpMutation } = SignUpApi;
