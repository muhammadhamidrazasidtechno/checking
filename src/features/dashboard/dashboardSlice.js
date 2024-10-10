import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboardDataLoading: false,
    dashboardData: null,
    dashboardDataError: null,
    dashboardOrdersLoading: false,
    dashboardOrdersData: null,
    dashboardOrdersError: null,
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        fetchDashBoardDataStart: (state) => {
            state.dashboardDataLoading = true;
        },
        fetchDashboardDataSuccess: (state, action) => {
            state.dashboardDataLoading = false;
            state.dashboardData = action.payload;
        },
        fetchDashboardDataError: (state, action) => {
            state.dashboardDataLoading = false;
            state.dashboardDataError = action.payload;
        },
        fetchDashboardShippingsStart: (state) => {
            state.dashboardOrdersLoading = true;
        },
        fetchDashboardOrdersSuccess: (state, action) => {
            state.dashboardOrdersData = action.payload;
            state.dashboardOrdersLoading = false;
        },
        fetchDashboardOrdersFailure: (state, action) => {
            state.dashboardOrdersError = action.payload;
            state.dashboardOrdersLoading = false;
        }
    },
});

export const {
    fetchDashBoardDataStart,
    fetchDashboardDataSuccess,
    fetchDashboardDataError,
    fetchDashboardShippingsStart,
    fetchDashboardOrdersSuccess,
    fetchDashboardOrdersFailure,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
