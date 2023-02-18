export interface AuthRequest<T> {
    token: string;
    data: T;
}
