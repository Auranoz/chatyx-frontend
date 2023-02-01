import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { QueryStatus } from '@reduxjs/toolkit/query';

import useActions from 'shared/hooks/useActions';
import useAppSelector from 'shared/hooks/useAppSelector';
import { signUpActions } from '../model';
import { useSignUpMutation } from '../api';

const SignUp: React.FC = () => {
    const {
        handleInputUsername,
        handleInputPassword,
        handleInputEmail,
        handleInputFirstName,
        handleInputLastName,
        handleInputBirthDate,
        handleInputDepartment,
        reset
    } = useActions(signUpActions);
    const signUpData = useAppSelector(state => state.signUpSlice);
    const { username, password, email, firstName, lastName, birthDate, department } = signUpData;
    const [fetchSignUp, { status }] = useSignUpMutation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (status === QueryStatus.fulfilled) {
            reset();
            navigate('/login');
        }
    }, [status]);

    return (
        <>
            <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={e => handleInputUsername(e.target.value)}
            />
            <TextField
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={e => handleInputPassword(e.target.value)}
            />
            <TextField
                fullWidth
                type="email"
                label="Email"
                value={email}
                onChange={e => handleInputEmail(e.target.value)}
            />
            <TextField
                fullWidth
                label="First name"
                value={firstName}
                onChange={e => handleInputFirstName(e.target.value)}
            />
            <TextField
                fullWidth
                label="Last name"
                value={lastName}
                onChange={e => handleInputLastName(e.target.value)}
            />
            <TextField
                fullWidth
                label="Birth date"
                value={birthDate}
                onChange={e => handleInputBirthDate(e.target.value)}
            />
            <TextField
                fullWidth
                label="Department"
                value={department}
                onChange={e => handleInputDepartment(e.target.value)}
            />
            <Button fullWidth variant="contained" onClick={() => fetchSignUp(signUpData)}>
                Sign Up
            </Button>
        </>
    );
};

export default SignUp;
