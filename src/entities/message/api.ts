import apiSlice from 'shared/api';

import { WS_URL } from 'shared/config';
import { CreateMessageDTO, Message, StoreMessage } from './consts';
import { blobToUint } from './utils';

let socket: WebSocket;

const messageSocketApi = apiSlice.injectEndpoints({
    endpoints: build => ({
        createSocketChannel: build.query<undefined, string>({
            queryFn: token => {
                if (!socket) {
                    socket = new WebSocket(`${WS_URL}?token=${token}`);
                }
                return { data: undefined };
            }
        }),
        sendSocketMessage: build.mutation<undefined, CreateMessageDTO>({
            queryFn: data => {
                const encodedMsg = CreateMessageDTO.encode(data).finish();
                socket.send(encodedMsg);
                return { data: undefined };
            }
        }),
        listenSocketChannel: build.query<StoreMessage[], void>({
            queryFn: () => {
                return { data: [] };
            },
            async onCacheEntryAdded(
                params,
                { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
            ) {
                try {
                    await cacheDataLoaded;

                    socket.onmessage = async (message: MessageEvent) => {
                        const uintMsg = await blobToUint(message.data);
                        const decodedMsg = Message.decode(uintMsg);
                        const storeMsg: StoreMessage = {
                            ...decodedMsg,
                            createdAt: decodedMsg?.createdAt?.getTime()
                        };

                        updateCachedData(draft => {
                            draft.push(storeMsg);
                        });
                    };
                } catch (error) {
                    throw new Error(`Something went wrong with websockets: ${error}`);
                }

                await cacheEntryRemoved;
                socket.close();
            }
        })
    })
});

export const {
    useLazyCreateSocketChannelQuery,
    useSendSocketMessageMutation,
    useListenSocketChannelQuery
} = messageSocketApi;
