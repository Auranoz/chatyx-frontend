import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Chat from 'assets/images/chat.png';
import { AuthBox, AvatarContainer, NewUserBox } from 'components/ui/atoms/auth';
import useAppActions from 'hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';
import { AuthInputData, SignInState } from 'features/typings';
import { useSignInMutation } from './auth-sign-in-api';

const AuthSignInPage: React.FC = () => {
    const { handleInputLogin, handleInputPassword } = useAppActions();
    const { username, password } = useAppSelector(state => state.authSlice);
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
        <Container>
            <AuthBox>
                <AvatarContainer src={Chat} />
                <Typography component="div" variant="h5">
                    Sign in to ChatyX
                </Typography>
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
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => fetchSignIn(preparedSignInData)}
                >
                    Sign in
                </Button>
                <NewUserBox>
                    <Typography>
                        {'New to Chatyx? '}
                        <Link to="register">Create an account</Link>
                    </Typography>
                </NewUserBox>
            </AuthBox>
        </Container>
    );
};

export default AuthSignInPage;
