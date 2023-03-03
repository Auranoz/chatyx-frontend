import { Decamelized } from 'humps';

export interface UserInfo {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    department: string;
    birthDate: string;
    createdAt: string;
    updatedAt: string;
}

export type ApiUserInfo = Decamelized<UserInfo>;
