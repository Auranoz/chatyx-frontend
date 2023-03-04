import apiSlice from 'shared/api';
import { AddUserParams, ApiGetUsersListResponse } from './consts';

const chatOptions = apiSlice.injectEndpoints({
    endpoints: build => ({
        getUsersList: build.query<ApiGetUsersListResponse, void>({
            query: () => ({
                url: 'users'
            })
        }),
        addChatUser: build.mutation<undefined, AddUserParams>({
            query: ({ chatId, userId }) => ({
                url: `chats/${chatId}/members?user_id=${userId}`,
                method: 'POST'
            })
        })
    })
});

export const { useLazyGetUsersListQuery, useAddChatUserMutation } = chatOptions;
