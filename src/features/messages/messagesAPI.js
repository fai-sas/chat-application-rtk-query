/* eslint-disable no-unused-vars */

import { apiSlice } from '../api/apiSlice'

export const messagesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) =>
        `/conversations?conversationId=${id}&_sort=timestamp&_order=desc&page=1&_limit=${
          import.meta.env.VITE_MESSAGES_PER_PAGE
        }`,
    }),
  }),
})

export const { useGetMessagesQuery } = messagesAPI
