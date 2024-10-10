import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = null;
        },
        fetchProductsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    // Actions for fetching products.
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsError,
} = productsSlice.actions;
export default productsSlice.reducer;
