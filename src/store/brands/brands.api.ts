import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IBrand } from '../../models/IBrand';

export const brandsApi = createApi({
  reducerPath: 'brands',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (build) => ({
    searchBrands: build.query<IBrand[], any>({
      query: () => ({
        url: 'brands',
      }),
    }),
  }),
});

export const { useSearchBrandsQuery } = brandsApi;
