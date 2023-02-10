import apiSlice from 'shared/api';
import { ChatResponseItem, CreateChatInputParams } from './consts';

// TODO: Provides tags for auto-refresh chats in 'src/widgets/chats-list/api.ts'
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
