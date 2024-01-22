/* eslint-disable no-unused-vars */

import { apiSlice } from '../api/apiSlice'

export const conversationsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${
          import.meta.env.VITE_CONVERSATIONS_PER_PAGE
        }`,
    }),
  }),
})

export const { useGetConversationsQuery } = conversationsAPI
