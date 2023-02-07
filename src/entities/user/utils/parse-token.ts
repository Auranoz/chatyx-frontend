import jwtDecode from 'jwt-decode';

export const calculateRefreshTimeout = (token: string): number => {
    const decoded = jwtDecode<{ exp: number }>(token);
    return decoded.exp * 1000 - Date.now() - 10 * 1000;
};
