import { CreateChatParams } from 'entities/chats';

export interface ChatResponseItem {
    id: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    creator_id: string;
}

export interface CreateChatInputParams extends CreateChatParams {
    token: string;
}

export interface ChatCreateProps {
    onRefreshChats: () => unknown;
}
