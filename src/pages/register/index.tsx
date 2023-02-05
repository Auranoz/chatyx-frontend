import * as React from 'react';
import Container from '@mui/material/Container';

import { UserAuthForm } from 'entities/user';
import { Link } from 'react-router-dom';
import SignUp from 'features/sign-up';

const SignUpPage: React.FC = () => (
    <Container>
        <UserAuthForm
            imageLabel="Sign up to ChatyX"
            bottomLeft="Already have an account? "
            bottomRight={<Link to="/login">Login</Link>}
        >
            <SignUp />
        </UserAuthForm>
    </Container>
);

export default SignUpPage;
