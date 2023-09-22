import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetPostResponse, GetPostsResponse } from './types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, void>({
      query: () => 'posts',
    }),
    getPost: builder.query<GetPostResponse, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = api
