import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authentication: (state, action) => {
            state.user = action.payload,
            state.isAuthenticated = !!action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
        update: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },
        logOut: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const {
    authentication,
    logOut,
    setToken,
    clearToken,
    update,
} = authSlice.actions;
export default authSlice.reducer;
