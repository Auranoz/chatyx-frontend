export interface SignUpState {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    department: string;
}

export interface SignUpResponse extends SignUpState {
    id: string;
    createdAt: string;
    updatedAt: string;
}
