import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    celebrities: [],
    loading: false,
    error: null,
    celebrityDetailsLoading: false,
    celebrityDetails: {},
    celebrityDetailsError: null,
    celebrityBanError: {},
};

export const celebritiesSlice = createSlice({
    name: 'celebrities',
    initialState,
    reducers: {
        fetchCelebritiesStart: (state) => {
            state.loading = true;
        },
        fetchCelebritiesSuccess: (state, action) => {
            state.loading = false;
            state.celebrities = action.payload;
            state.error = null;
        },
        fetchCelebritiesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchCelebrityDetailsStart: (state) => {
            state.celebrityDetailsLoading = true;
        },
        fetchCelebrityDetailsSuccess: (state, action) => {
            state.celebrityDetails = action.payload;
            state.celebrityDetailsLoading = false;
            state.celebrityDetailsError = null;
        },
        fetchCelebrityDetailsFailure: (state, action) => {
            state.celebrityDetailsLoading = false;
            state.celebrityDetailsError = action.payload;
        },
        banCelebrity: (state) => {
            const { isBan } = state.celebrityDetails;
            state.celebrityDetails.isBan = isBan ? false : true;
        },
        handleCelebrityBanErrors: (state, action) => {
            state.celebrityBanError = action.payload;
        },
    },
});

export const {
    // Actions for fetching celebrities.
    fetchCelebritiesStart,
    fetchCelebritiesSuccess,
    fetchCelebritiesFailure,
    // Actions for fetching details for individual celebrity.
    fetchCelebrityDetailsStart,
    fetchCelebrityDetailsSuccess,
    fetchCelebrityDetailsFailure,
    // Actions to change celebrity data.
    banCelebrity,
    handleCelebrityBanErrors,
} = celebritiesSlice.actions;
export default celebritiesSlice.reducer;
