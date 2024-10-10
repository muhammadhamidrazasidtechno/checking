import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
    userDetailsLoading: false,
    userDetails: {},
    userDetailsError: null,
    userBanError: {},
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersStart: (state) => {
            state.loading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchUserDetailsStart: (state) => {
            state.userDetailsLoading = true;
        },
        fetchUserDetailsSuccess: (state, action) => {
            state.userDetails = action.payload;
            state.userDetailsLoading = false;
            state.userDetailsError = null;
        },
        fetchUserDetailsFailure: (state, action) => {
            state.userDetailsLoading = false;
            state.userDetailsError = action.payload;
        },
        banUser: (state) => {
            const { isBan } = state.userDetails;
            state.userDetails.isBan = isBan ? false : true;
        },
        handleUserBanErrors: (state, action) => {
            state.userBanError = action.payload;
        },
    },
});

export const {
    // Actions for fetching users.
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFailure,
    // Actions for fetching details for individual user.
    fetchUserDetailsStart,
    fetchUserDetailsSuccess,
    fetchUserDetailsFailure,
    // Actions to change user data.
    banUser,
    handleUserBanErrors,
} = usersSlice.actions;
export default usersSlice.reducer;
