import apiSlice from 'shared/api';
import { ChatListResponse } from './consts';

const chatsBoxApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        getChats: build.query<ChatListResponse, void>({
            query: () => ({
                url: 'chats'
            })
        })
    })
});

export const { useLazyGetChatsQuery } = chatsBoxApi;
