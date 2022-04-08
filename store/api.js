import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeApi = createApi({
  reducerPath: "fakeapi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: ["Posts", "Users"],

  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "/posts", providesTags: ["Posts"] }),

    addPosts: builder.mutation({
      query(data) {
        return {
          url: `/posts`,
          method: "POST",
          body: data,
        };
      },

      invalidatesTags: ["Posts"],
    }),

    updatePost: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body,
        };
      },
    }),

    deletePost: builder.mutation({
      query(id) {
        return {
          url: `post/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = fakeApi;

export default fakeApi;
