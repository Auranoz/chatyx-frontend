const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || '';
};

export const SERVER_URL = getEnvVar('SERVER_URL');
export const WS_URL = getEnvVar('WS_URL');
export const CHAT_MESSAGES_STEP = getEnvVar('CHAT_MESSAGES_STEP');
