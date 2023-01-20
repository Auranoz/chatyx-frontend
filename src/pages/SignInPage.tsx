import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Chat from 'assets/images/chat.png';
import { AuthBox, AvatarContainer, NewUserBox } from '../shared/auth';
import useActions from '../hooks/useActions';
import useAppSelector from '../hooks/useAppSelector';

const SignInPage: React.FC = () => {
    const { handleInputLogin, handleInputPassword } = useActions();
    const { login, password } = useAppSelector((state) => state.authSlice);

    return (
        <Container>
            <AuthBox>
                <AvatarContainer src={Chat} />
                <Typography component="div" variant="h5">
                    Sign in to ChatyX
                </Typography>
                <TextField fullWidth label="Username" value={login} onChange={handleInputLogin} />
                <TextField
                    type="password"
                    fullWidth
                    label="Password"
                    value={password}
                    onChange={handleInputPassword}
                />
                <Button fullWidth variant="contained">
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

export default SignInPage;
