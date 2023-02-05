export interface AuthInputData<T> {
    fingerprint: string;
    authData: T;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRegister {
    username: string;
    password: string;
    email: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    department?: string;
}
