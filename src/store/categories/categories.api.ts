import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../../models/ICategory';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (build) => ({
    searchCategories: build.query<ICategory[], any>({
      query: () => ({
        url: 'categories',
      }),
    }),
  }),
});

export const { useSearchCategoriesQuery } = categoriesApi;
