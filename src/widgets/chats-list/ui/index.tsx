import React, { useEffect } from 'react';
import { camelizeKeys } from 'humps';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';

import ChatCreate, { ChatResponseItem } from 'features/chat-create';
import { useActions, useAppSelector } from 'shared/hooks';
import { ChatRow, selectedChatActions } from 'entities/chats';
import { useLazyGetChatsQuery } from '../api';

const ChatsList: React.FC = () => {
    const { selectChat, reset } = useActions(selectedChatActions);
    const selectedChat = useAppSelector(state => state.selectedChatSlice);
    const [fetchChatList, { data, isLoading }] = useLazyGetChatsQuery();

    useEffect(() => {
        fetchChatList();
    }, []);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                reset();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    if (isLoading) {
        // TODO: Return skeleton
        return <>Loading...</>;
    }

    return (
        <Layout selectedChat={selectedChat.id}>
            <ChatListWrapper>
                <TransitionGroup>
                    {!!data && data.list.length === 0
                        ? 'No chats :('
                        : !!data &&
                          data.list.map(chat => (
                              <Collapse key={chat.id}>
                                  <ChatRow
                                      isSelected={selectedChat.id === chat.id}
                                      chat={camelizeKeys<ChatResponseItem>(chat)}
                                      onChatRowClick={selectChat}
                                  />
                              </Collapse>
                          ))}
                </TransitionGroup>
            </ChatListWrapper>
            <ChatCreateWrapper>
                <ChatCreate onRefreshChats={() => fetchChatList()} />
            </ChatCreateWrapper>
        </Layout>
    );
};

export default ChatsList;

const Layout = styled('div', { shouldForwardProp: propName => propName !== 'selectedChat' })<{
    selectedChat?: string;
}>`
    height: 100vh;
    position: relative;

    border-right: 1px solid #9e9e9e;
    border-radius: 0.5rem;
    background-color: lightgray;

    @media screen and (min-width: 971px) {
        width: 400px;
    }

    @media screen and (max-width: 970px) {
        ${({ selectedChat }) =>
            selectedChat
                ? {
                      display: 'none'
                  }
                : {
                      width: '100%'
                  }}
    }
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
