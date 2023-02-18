export enum Statuses {
    InChat = 1,
    Left = 2,
    Kicked = 3
}

export interface Member {
    chatId: string;
    isCreator: boolean;
    statusId: Statuses;
    userId: string;
    username: string;
}
