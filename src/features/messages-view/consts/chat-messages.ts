import { Decamelized } from 'humps';
import { Message } from 'entities/message';

export interface ApiChatMessagesParams {
    chatId: string;
    limit?: number;
    offset?: number;
    offsetDate?: string;
    direction?: 'older' | 'newer';
}

export type ApiMessage = Decamelized<Message>;

export interface ApiChatMessagesResponse {
    has_next: boolean;
    has_prev: boolean;
    total: number;
    result: ApiMessage[];
}
