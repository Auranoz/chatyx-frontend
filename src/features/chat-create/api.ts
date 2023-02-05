import apiSlice from 'shared/api';
import { ChatResponseItem, CreateChatInputParams } from './consts';

const chatCreateApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        createChat: build.mutation<ChatResponseItem, CreateChatInputParams>({
            query: ({ token, ...params }) => ({
                url: 'chats',
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: params
            })
        })
    })
});

export const { useCreateChatMutation } = chatCreateApi;
