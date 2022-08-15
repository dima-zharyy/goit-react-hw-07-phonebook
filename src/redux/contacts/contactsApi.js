import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fa64083c4f110faa98537c.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
