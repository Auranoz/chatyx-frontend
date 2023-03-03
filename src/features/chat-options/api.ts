import apiSlice from 'shared/api';
import { AuthRequest } from 'shared/consts';
import { AddUserParams, ApiGetUsersListResponse } from './consts';

const chatOptions = apiSlice.injectEndpoints({
    endpoints: build => ({
        getUsersList: build.query<ApiGetUsersListResponse, AuthRequest>({
            query: ({ token }) => ({
                url: 'users',
                headers: { Authorization: `Bearer ${token}` }
            })
        }),
        addChatUser: build.mutation<undefined, AuthRequest<AddUserParams>>({
            query: ({ token, data: { chatId, userId } }) => ({
                url: `chats/${chatId}/members?user_id=${userId}`,
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
});

export const { useLazyGetUsersListQuery, useAddChatUserMutation } = chatOptions;
