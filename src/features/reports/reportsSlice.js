import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reports: [],
    userReports: [],
    individualReport: {},
    userIndividualReport: {},
};

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {

        fetchReportsSuccess: (state, action) => {
            state.reports = action.payload;
        },
        fetchUserReportsSuccess: (state, action) => {
            state.userReports = action.payload;
        },
        fetchIndividualReportSuccess: (state, action) => {
            state.individualReport = action.payload;
        },
        fetchUserIndividualReportSuccess: (state, action) => {
            state.userIndividualReport = action.payload;
        },
    },
});

export const {
    // Actions for fetching reports.
    fetchReportsSuccess,
    // Actions for fetching user reports.
    fetchUserReportsSuccess,
    // Actions for fetching individual report.
    fetchIndividualReportSuccess,
    // Actions for fetching user's individual report.
    fetchUserIndividualReportSuccess,
} = reportsSlice.actions;
export default reportsSlice.reducer;
