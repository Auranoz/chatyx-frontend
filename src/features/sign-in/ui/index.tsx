import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useActions, useAppSelector } from 'shared/hooks';
import { AuthInputData, userTokenAction, UserLogin } from 'entities/user';
import { useSignInMutation } from '../api';
import { signInActions } from '../model';

const SignIn: React.FC = () => {
    const { handleInputLogin, handleInputPassword, reset } = useActions(signInActions);
    const { setUserToken } = useActions(userTokenAction);
    const { username, password } = useAppSelector(state => state.signInSlice);
    const fingerprint = useAppSelector(state => state.fingerprintSlice);
    const [fetchSignIn, { isSuccess, data }] = useSignInMutation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isSuccess) {
            setUserToken(data?.access_token ?? '');
            reset();
            navigate('/chats');
        }
    }, [isSuccess]);

    const preparedSignInData: AuthInputData<UserLogin> = {
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
