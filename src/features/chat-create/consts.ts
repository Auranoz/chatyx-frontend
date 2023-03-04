import { ChatInfo } from 'entities/chats';
import { Decamelized } from 'humps';

export type ChatResponseItem = Decamelized<ChatInfo>;

export interface ChatCreateProps {
    onRefreshChats: () => unknown;
}
