import { UserRegister } from 'entities/user';

export interface SignUpResponse extends UserRegister {
    id: string;
    createdAt: string;
    updatedAt: string;
}
