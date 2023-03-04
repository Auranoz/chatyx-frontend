import apiSlice from 'shared/api';
import { CreateChatParams } from 'entities/chats';
import { ChatResponseItem } from './consts';

// TODO: Provides tags for auto-refresh chats in 'src/widgets/chats-list/api.ts'
const chatCreateApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        createChat: build.mutation<ChatResponseItem, CreateChatParams>({
            query: params => ({
                url: 'chats',
                method: 'POST',
                body: params
            })
        })
    })
});

export const { useCreateChatMutation } = chatCreateApi;
