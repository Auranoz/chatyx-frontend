import * as React from 'react';
import { styled } from '@mui/material/styles';
import { camelizeKeys } from 'humps';

import ChatCreate, { ChatResponseItem } from 'features/chat-create';
import { useAppSelector } from 'shared/hooks';
import { ChatRow } from 'entities/chats';
import { useLazyGetChatsQuery } from '../api';

const ChatsBox: React.FC = () => {
    const token = useAppSelector(state => state.userAuthSlice);
    const [fetchChatList, { data, isLoading }] = useLazyGetChatsQuery();

    React.useEffect(() => {
        if (token) {
            fetchChatList(token);
        }
    }, []);

    if (isLoading) {
        // Return skeleton
        return <>Loading...</>;
    }

    return (
        <Layout>
            <ChatListWrapper>
                {!!data && data.list.length === 0
                    ? 'No chats :('
                    : !!data &&
                      data.list.map(chat => (
                          <ChatRow key={chat.id} chat={camelizeKeys<ChatResponseItem>(chat)} />
                      ))}
            </ChatListWrapper>
            <ChatCreateWrapper>
                <ChatCreate onRefreshChats={() => fetchChatList(token)} />
            </ChatCreateWrapper>
        </Layout>
    );
};

export default ChatsBox;

const Layout = styled('div')`
    grid-area: chats-box;
    position: relative;

    border-left: 1px solid gray;
    background-color: lightgray;
`;

const ChatListWrapper = styled('div')`
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
`;

const ChatCreateWrapper = styled('div')`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`;
