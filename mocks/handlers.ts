import { rest } from 'msw';

const postSignIn = () => {
    return rest.post(`${process.env.SERVER_URL}/api/auth/sign-in`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ access_token: '123', refresh_token: '123' }));
    });
};

export const handlers = [postSignIn()];
