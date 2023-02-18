import { Message } from './generated/message';

export type StoreMessage = Omit<Message, 'createdAt'> & {
    createdAt?: number;
};

export { Message };
export { CreateMessageDTO } from './generated/message';
