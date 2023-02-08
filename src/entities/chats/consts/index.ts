export interface ChatInfo {
    id: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    creatorId: string;
}

export interface CreateChatParams {
    name: string;
    description: string;
}
