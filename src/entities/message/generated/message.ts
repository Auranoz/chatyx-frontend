/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Timestamp } from './google/protobuf/timestamp';

export const protobufPackage = 'decoders';

export interface CreateMessageDTO {
    text: string;
    chatId: string;
}

export interface Message {
    id: string;
    actionId: Message_Action;
    text: string;
    chatId: string;
    senderId: string;
    createdAt: Date | undefined;
}

export enum Message_Action {
    UNKNOWN = 0,
    SEND = 1,
    JOIN = 2,
    LEAVE = 3,
    KICK = 4,
    UNRECOGNIZED = -1
}

export function message_ActionFromJSON(object: any): Message_Action {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return Message_Action.UNKNOWN;
        case 1:
        case 'SEND':
            return Message_Action.SEND;
        case 2:
        case 'JOIN':
            return Message_Action.JOIN;
        case 3:
        case 'LEAVE':
            return Message_Action.LEAVE;
        case 4:
        case 'KICK':
            return Message_Action.KICK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Message_Action.UNRECOGNIZED;
    }
}

export function message_ActionToJSON(object: Message_Action): string {
    switch (object) {
        case Message_Action.UNKNOWN:
            return 'UNKNOWN';
        case Message_Action.SEND:
            return 'SEND';
        case Message_Action.JOIN:
            return 'JOIN';
        case Message_Action.LEAVE:
            return 'LEAVE';
        case Message_Action.KICK:
            return 'KICK';
        case Message_Action.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

function createBaseCreateMessageDTO(): CreateMessageDTO {
    return { text: '', chatId: '' };
}

export const CreateMessageDTO = {
    encode(message: CreateMessageDTO, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.chatId !== '') {
            writer.uint32(18).string(message.chatId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageDTO {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageDTO();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.chatId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateMessageDTO {
        return {
            text: isSet(object.text) ? String(object.text) : '',
            chatId: isSet(object.chatId) ? String(object.chatId) : ''
        };
    },

    toJSON(message: CreateMessageDTO): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.chatId !== undefined && (obj.chatId = message.chatId);
        return obj;
    },

    create<I extends Exact<DeepPartial<CreateMessageDTO>, I>>(base?: I): CreateMessageDTO {
        return CreateMessageDTO.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<CreateMessageDTO>, I>>(object: I): CreateMessageDTO {
        const message = createBaseCreateMessageDTO();
        message.text = object.text ?? '';
        message.chatId = object.chatId ?? '';
        return message;
    }
};

function createBaseMessage(): Message {
    return { id: '', actionId: 0, text: '', chatId: '', senderId: '', createdAt: undefined };
}

export const Message = {
    encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.actionId !== 0) {
            writer.uint32(16).int32(message.actionId);
        }
        if (message.text !== '') {
            writer.uint32(26).string(message.text);
        }
        if (message.chatId !== '') {
            writer.uint32(34).string(message.chatId);
        }
        if (message.senderId !== '') {
            writer.uint32(42).string(message.senderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Message {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.actionId = reader.int32() as any;
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                case 4:
                    message.chatId = reader.string();
                    break;
                case 5:
                    message.senderId = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Message {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            actionId: isSet(object.actionId) ? message_ActionFromJSON(object.actionId) : 0,
            text: isSet(object.text) ? String(object.text) : '',
            chatId: isSet(object.chatId) ? String(object.chatId) : '',
            senderId: isSet(object.senderId) ? String(object.senderId) : '',
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined
        };
    },

    toJSON(message: Message): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.actionId !== undefined && (obj.actionId = message_ActionToJSON(message.actionId));
        message.text !== undefined && (obj.text = message.text);
        message.chatId !== undefined && (obj.chatId = message.chatId);
        message.senderId !== undefined && (obj.senderId = message.senderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
        return Message.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
        const message = createBaseMessage();
        message.id = object.id ?? '';
        message.actionId = object.actionId ?? 0;
        message.text = object.text ?? '';
        message.chatId = object.chatId ?? '';
        message.senderId = object.senderId ?? '';
        message.createdAt = object.createdAt ?? undefined;
        return message;
    }
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
          [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
