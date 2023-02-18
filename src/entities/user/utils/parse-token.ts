import jwtDecode from 'jwt-decode';

export const parseToken = (token: string): { exp: number; sub: string } =>
    jwtDecode<{ exp: number; sub: string }>(token);

export const calculateRefreshTimeout = (token: string): number => {
    const decoded = parseToken(token);
    return decoded.exp * 1000 - Date.now() - 10 * 1000;
};
