import * as React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const HomePage: React.FC = () => (
    <Container>
        <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
        >
            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <Link to="/register">
                <Button>Sign Up</Button>
            </Link>
            <Button disabled>Chat</Button>
        </Stack>
        <Box>This page is being developed</Box>
    </Container>
);

export default HomePage;
