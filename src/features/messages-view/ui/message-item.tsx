import React from 'react';

import { MessageCenter, MessageRowLeft, MessageRowRight, StoreMessage } from 'entities/message';
import { ApiChatMembersResponse } from '../consts/chat-members';
import { performTimeSend } from '../utils';

interface MessageItemProps {
    message: StoreMessage;
    members: ApiChatMembersResponse;
    userId: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, members, userId }) => {
    const timeSend = performTimeSend(message.createdAt);

    if (message.actionId > 1) {
        return <MessageCenter key={message.id}>{message.text}</MessageCenter>;
    }

    if (message.senderId === userId) {
        return <MessageRowRight key={message.id} text={message.text} timestamp={timeSend} />;
    }

    const username =
        members?.list.filter(member => member.user_id === message.senderId)[0]?.username ??
        'unknown';
    return (
        <MessageRowLeft
            key={message.id}
            username={username}
            photoUrl={username[0].toUpperCase()}
            text={message.text}
            timestamp={timeSend}
        />
    );
};

export default MessageItem;
