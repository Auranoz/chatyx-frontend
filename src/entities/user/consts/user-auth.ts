import { UserInfo } from './user-info';

export interface AuthInputData<T = undefined> {
    fingerprint: string;
    authData?: T;
}

export interface UserLogin {
    username: string;
    password: string;
}

export type UserRegister = Omit<UserInfo, 'id' | 'createdAt' | 'updatedAt'> & {
    password: string;
};
