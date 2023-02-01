import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import AuthCard from 'entities/AuthCard/ui';
import SignIn from 'features/SignIn';

const SignInPage: React.FC = () => (
    <Container>
        <AuthCard
            imageLabel="Sign in to ChatyX"
            bottomLeft="New to Chatyx? "
            bottomRight={<Link to="/register">Create an account</Link>}
        >
            <SignIn />
        </AuthCard>
    </Container>
);

export default SignInPage;
