import { camelizeKeys, Decamelized } from 'humps';

import { Message, StoreMessage } from 'entities/message';
import { ApiMessage } from './consts/chat-messages';

export const buildListMessages = (
    apiMessages?: ApiMessage[],
    socketMessages?: StoreMessage[]
): StoreMessage[] => {
    const apiStoreMessages: StoreMessage[] =
        apiMessages && apiMessages.length
            ? [...apiMessages].reverse().map(apiMessage => {
                  const camelizeMsg = camelizeKeys<Decamelized<Message>>(apiMessage);
                  const storeMsg: StoreMessage = {
                      ...camelizeMsg,
                      createdAt: apiMessage?.created_at && new Date(apiMessage.created_at).getTime()
                  };
                  return storeMsg;
              })
            : [];

    if (!socketMessages || socketMessages.length === 0) {
        return apiStoreMessages;
    }

    const concatenatedMessages = [...apiStoreMessages, ...socketMessages];
    const uniqueIds = [...new Set(concatenatedMessages.map(msg => msg.id))];
    return uniqueIds
        .map(id => concatenatedMessages.find(msg => msg.id === id) as StoreMessage)
        .filter(obj => obj);
};

export const performTimeSend = (createdAt: number | undefined): string => {
    const dateSend = createdAt && new Date(createdAt);

    const minutes = dateSend ? `0${dateSend.getMinutes()}`.slice(-2) : '--';
    const hours = dateSend ? `0${dateSend.getHours()}`.slice(-2) : '--';

    return `${hours}:${minutes}`;
};
