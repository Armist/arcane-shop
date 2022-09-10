import {configureStore} from '@reduxjs/toolkit';
import {brandsApi} from './brands/brands.api';
import {categoriesApi} from './categories/categories.api';

export const store = configureStore({
    reducer: {
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [brandsApi.reducerPath]: brandsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            brandsApi.middleware
        ),
});
