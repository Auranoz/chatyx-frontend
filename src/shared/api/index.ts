import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: 1. get value of "baseURL" from ENV variables
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
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
