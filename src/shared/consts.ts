export interface AuthRequest<T = undefined> {
    token: string;
    data: T;
}
