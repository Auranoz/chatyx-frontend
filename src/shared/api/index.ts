import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from '../config';

const baseQuery = fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/`,
    prepareHeaders: (headers, { getState }) => {
        const user = (getState() as RootState).userAuthSlice;

        if (user) {
            headers.set('Authorization', `Bearer ${user}`);
        }

        return headers;
    },
    credentials: 'include'
});

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});

export default apiSlice;
