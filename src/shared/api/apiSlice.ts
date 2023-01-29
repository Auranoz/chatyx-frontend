import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: 1. get value of "baseURL" from ENV variables
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/'
    }),
    endpoints: () => ({})
});

export default apiSlice;
