import { ApiUserInfo } from 'entities/user';

export interface ApiGetUsersListResponse {
    list: ApiUserInfo[];
}

export interface AddUserParams {
    userId: string;
    chatId: string;
}
