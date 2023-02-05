import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { UserAuthForm } from 'entities/user';
import SignIn from 'features/sign-in';

const SignInPage: React.FC = () => (
    <Container>
        <UserAuthForm
            imageLabel="Sign in to ChatyX"
            bottomLeft="New to Chatyx? "
            bottomRight={<Link to="/register">Create an account</Link>}
        >
            <SignIn />
        </UserAuthForm>
    </Container>
);

export default SignInPage;
