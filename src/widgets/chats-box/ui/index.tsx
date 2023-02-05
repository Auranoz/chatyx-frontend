import * as React from 'react';
import { styled } from '@mui/material/styles';

import ChatCreate from 'features/chat-create';
import { useAppSelector } from 'shared/hooks';
import { useLazyGetChatsQuery } from '../api';

const ChatsBox: React.FC = () => {
    const token = useAppSelector(state => state.userAuthSlice);
    const [fetchChatList, { data, isLoading }] = useLazyGetChatsQuery();

    React.useEffect(() => {
        fetchChatList(token);
    }, []);

    if (isLoading) {
        // Return skeleton
        return <>Loading...</>;
    }

    return (
        <Layout>
            {!!data && data.list.length === 0
                ? 'No chats :('
                : !!data && data.list.map(chat => chat.name)}
            <ChatCreateWrapper>
                <ChatCreate onRefreshChats={() => fetchChatList(token)} />
            </ChatCreateWrapper>
        </Layout>
    );
};

export default ChatsBox;

const Layout = styled('div')`
    grid-area: chats-box;
    display: flex;
    position: relative;

    border: 1px solid black;
`;

const ChatCreateWrapper = styled('div')`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`;
