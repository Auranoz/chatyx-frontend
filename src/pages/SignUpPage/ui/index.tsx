import * as React from 'react';
import Container from '@mui/material/Container';

import AuthCard from 'entities/AuthCard';
import { Link } from 'react-router-dom';
import SignUp from 'features/SignUp';

const SignUpPage: React.FC = () => (
    <Container>
        <AuthCard
            imageLabel="Sign up to ChatyX"
            bottomLeft="Already have an account? "
            bottomRight={<Link to="/login">Login</Link>}
        >
            <SignUp />
        </AuthCard>
    </Container>
);

export default SignUpPage;
