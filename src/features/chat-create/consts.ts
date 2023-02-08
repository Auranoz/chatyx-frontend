import { ChatInfo, CreateChatParams } from 'entities/chats';
import { Decamelized } from 'humps';

export type ChatResponseItem = Decamelized<ChatInfo>;

export interface CreateChatInputParams extends CreateChatParams {
    token: string;
}

export interface ChatCreateProps {
    onRefreshChats: () => unknown;
}
