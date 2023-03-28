import React, { useEffect, useRef, useState, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { Decamelized } from 'humps';

import { useAppSelector } from 'shared/hooks';
import { parseToken } from 'entities/user';
import { Message, MessageCenter, useListenSocketChannelQuery } from 'entities/message';
import { useLazyGetChatMembersQuery, useLazyGetChatMessagesQuery } from '../api';
import { buildListMessages } from '../utils';
import MessageItem from './message-item';

interface MessageViewProps {
    selectedChatId: string;
}

const MessagesView: React.FC<MessageViewProps> = ({ selectedChatId }) => {
    const [currOffset, setCurrOffset] = useState(0);
    const [messagesList, setMessagesList] = useState<Decamelized<Message>[]>([]);
    const [isUpScrolling, setUpScrolling] = useState(false);
    const [idScrollMsg, setIdScrollMsg] = useState<string | undefined>();

    const token = useAppSelector(state => state.userAuthSlice);
    const [getChatMessages, { data: apiMessages, isLoading: isLoadingMessages }] =
        useLazyGetChatMessagesQuery();
    const [getChatMembers, { data: membersData, isLoading: isLoadingMembers }] =
        useLazyGetChatMembersQuery();
    const { data: socketMessages } = useListenSocketChannelQuery();
    const currentChatSocketMessages = socketMessages?.filter(msg => msg.chatId === selectedChatId);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const listInnerRef = useRef<HTMLDivElement>(null);
    const messageScrollRef = useRef<HTMLDivElement>(null);

    const userId = parseToken(token).sub;
    const contentMessages = buildListMessages(messagesList, currentChatSocketMessages);

    useEffect(() => {
        changeChatReset();
        getChatMessages({ chatId: selectedChatId });
        getChatMembers(selectedChatId);
    }, [selectedChatId]);

    useEffect(() => {
        if (apiMessages?.result && apiMessages.result.length) {
            setIdScrollMsg(apiMessages.result.at(0)?.id);
            setMessagesList([...messagesList, ...apiMessages.result]);
        }
    }, [apiMessages]);

    useEffect(() => {
        if (!isUpScrolling) {
            scrollToBottom('auto');
        }
    }, [contentMessages]);

    useEffect(() => {
        if (isUpScrolling) {
            messageScrollRef.current?.scrollIntoView({ behavior: 'auto' });
        }
    }, [idScrollMsg]);

    useEffect(() => {
        if (currOffset && isUpScrolling && !!apiMessages?.has_next) {
            getChatMessages({ chatId: selectedChatId, offset: currOffset });
        }
    }, [currOffset, messagesList]);

    const changeChatReset = () => {
        setCurrOffset(0);
        setMessagesList([]);
        setUpScrolling(false);
    };

    const scrollToBottom = (behavior: ScrollBehavior) => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

            if (
                Math.floor(scrollTop) + clientHeight === scrollHeight ||
                Math.ceil(scrollTop) + clientHeight === scrollHeight
            ) {
                setUpScrolling(false);
            } else {
                setUpScrolling(true);
            }

            if (scrollHeight !== clientHeight && scrollTop === 0 && apiMessages?.has_next) {
                setCurrOffset(currOffset + 20);
            }
        }
    };

    if (!apiMessages || isLoadingMessages || !membersData || isLoadingMembers) {
        return <>Loading...</>;
    }

    return (
        <Layout ref={listInnerRef} onScroll={onScroll}>
            {contentMessages.length > 0 ? (
                contentMessages.map(msg => (
                    <Fragment key={msg.id}>
                        <MessageItem
                            key={msg.id}
                            message={msg}
                            members={membersData}
                            userId={userId}
                        />
                        {msg.id === idScrollMsg && (
                            <MessagesEnd key={`scroll-${msg.id}`} ref={messageScrollRef} />
                        )}
                    </Fragment>
                ))
            ) : (
                <MessageCenter>There is no messages yet</MessageCenter>
            )}
            <MessagesEnd ref={messagesEndRef} />
        </Layout>
    );
};

export default MessagesView;

const Layout = styled('div')`
    margin: 0 3rem;
    padding: 0 0.5rem;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
`;

const MessagesEnd = styled('div')``;
