import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRegister } from 'entities/user';

const initialState: UserRegister = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    department: ''
};

// TODO: Create a function-builder for handle-input actions
const SignUpSlice = createSlice({
    name: 'signUpSlice',
    initialState,
    reducers: {
        handleInputUsername: (state: UserRegister, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        handleInputPassword: (state: UserRegister, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        handleInputEmail: (state: UserRegister, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        handleInputFirstName: (state: UserRegister, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        handleInputLastName: (state: UserRegister, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        handleInputBirthDate: (state: UserRegister, action: PayloadAction<string>) => {
            state.birthDate = action.payload;
        },
        handleInputDepartment: (state: UserRegister, action: PayloadAction<string>) => {
            state.department = action.payload;
        },
        reset: () => initialState
    }
});

export const signUpActions = SignUpSlice.actions;
export const signUpReducer = SignUpSlice.reducer;
