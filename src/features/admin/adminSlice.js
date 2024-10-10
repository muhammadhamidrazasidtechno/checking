import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admins: [],
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        fetchAllAdmins: (state, action) => {
            state.admins = action.payload;
        },
        deleteAdmin: (state, action) => {
            state.admins = state.admins.filter((admin) => admin._id !== action.payload._id);
        },
        createAdmin: (state, action) => {
            state.admins = [
                ...state.admins,
                action.payload,
            ];
        },
    },
});

export const {
    fetchAllAdmins,
    deleteAdmin,
    createAdmin,
} = adminSlice.actions;
export default adminSlice.reducer;