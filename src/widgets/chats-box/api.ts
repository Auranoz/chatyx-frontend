import apiSlice from 'shared/api';
import { ChatListResponse } from './consts';

const chatsBoxApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        getChats: build.query<ChatListResponse, string>({
            query: token => ({
                url: 'chats',
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
});

export const { useLazyGetChatsQuery } = chatsBoxApi;
