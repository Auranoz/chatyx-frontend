import apiSlice from 'shared/api';
import { AuthRequest } from 'shared/consts';
import { ApiChatMessagesParams, ApiChatMessagesResponse } from './consts/chat-messages';
import { ApiChatMembersResponse } from './consts/chat-members';

const chatMessages = apiSlice.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query<ApiChatMessagesResponse, AuthRequest<ApiChatMessagesParams>>({
            query: ({
                token,
                data: {
                    chatId,
                    offset = 0,
                    limit = 50,
                    offsetDate = new Date().toISOString(),
                    direction = 'older'
                }
            }) => ({
                url: `chats/${chatId}/messages?limit=${limit}&offset=${offset}&offset_date=${offsetDate}&direction=${direction}`,
                headers: { Authorization: `Bearer ${token}` }
            })
        }),
        getChatMembers: build.query<ApiChatMembersResponse, AuthRequest<string>>({
            query: ({ token, data }) => ({
                url: `chats/${data}/members`,
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
});

export const { useLazyGetChatMessagesQuery, useLazyGetChatMembersQuery } = chatMessages;
