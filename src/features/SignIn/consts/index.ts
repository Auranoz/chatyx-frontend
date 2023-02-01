export interface SignInState {
    username: string;
    password: string;
}

export interface SignInResponse {
    access_token: string;
    refresh_token: string;
}
