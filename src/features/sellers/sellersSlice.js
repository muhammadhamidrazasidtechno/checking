import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sellers: [],
    loading: false,
    error: null,
    sellerDetailsLoading: false,
    sellerDetails: {},
    sellerDetailsError: null,
    sellerBanError: {},
};

export const sellersSlice = createSlice({
    name: 'sellers',
    initialState,
    reducers: {
        fetchSellersStart: (state) => {
            state.loading = true;
        },
        fetchSellersSuccess: (state, action) => {
            state.loading = false;
            state.sellers = action.payload;
            state.error = null;
        },
        fetchSellersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchSellerDetailsStart: (state) => {
            state.sellerDetailsLoading = true;
        },
        fetchSellerDetailsSuccess: (state, action) => {
            state.sellerDetails = action.payload;
            state.sellerDetailsLoading = false;
            state.sellerDetailsError = null;
        },
        fetchSellerDetailsFailure: (state, action) => {
            state.sellerDetailsLoading = false;
            state.sellerDetailsError = action.payload;
        },
        banSeller: (state) => {
            const { isBan } = state.sellerDetails;
            state.sellerDetails.isBan = isBan ? false : true;
        },
        handleSellerBanErrors: (state, action) => {
            state.sellerBanError = action.payload;
        },
    },
});

export const {
    // Actions for fetching sellers.
    fetchSellersStart,
    fetchSellersSuccess,
    fetchSellersFailure,
    // Actions for fetching details for individual seller.
    fetchSellerDetailsStart,
    fetchSellerDetailsSuccess,
    fetchSellerDetailsFailure,
    // Actions to change seller data.
    banSeller,
    handleSellerBanErrors,
} = sellersSlice.actions;
export default sellersSlice.reducer;
