export interface SignInState {
    username: string;
    password: string;
}

export interface AuthInputData<T> {
    fingerprint: string;
    authData: T;
}

export interface SignInResponse {
    access_token: string;
    refresh_token: string;
}
