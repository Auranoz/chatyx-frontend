import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useActions from 'shared/hooks/useActions';
import useAppSelector from 'shared/hooks/useAppSelector';
import { AuthInputData } from 'entities/AuthCard';
import { SignInState } from '../consts';
import { useSignInMutation } from '../api';
import { signInActions } from '../model';

const SignIn: React.FC = () => {
    const { handleInputLogin, handleInputPassword } = useActions(signInActions);
    const { username, password } = useAppSelector(state => state.signInSlice);
    const fingerprint = useAppSelector(state => state.fingerprintSlice);
    const [fetchSignIn] = useSignInMutation();

    const preparedSignInData: AuthInputData<SignInState> = {
        fingerprint,
        authData: {
            username,
            password
        }
    };

    return (
        <>
            <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={e => handleInputLogin(e.target.value)}
            />
            <TextField
                type="password"
                fullWidth
                label="Password"
                value={password}
                onChange={e => handleInputPassword(e.target.value)}
            />
            <Button fullWidth variant="contained" onClick={() => fetchSignIn(preparedSignInData)}>
                Sign in
            </Button>
        </>
    );
};

export default SignIn;
