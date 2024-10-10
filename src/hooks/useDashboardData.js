import { useSelector, useDispatch } from 'react-redux';

import { dashboardApi } from '../api/requests';
import {
    fetchDashBoardDataStart,
    fetchDashboardDataSuccess,
    fetchDashboardDataError,
    fetchDashboardShippingsStart,
    fetchDashboardOrdersSuccess,
    fetchDashboardOrdersFailure,
} from '../features/dashboard/dashboardSlice';

export const useDashboardData = () => {
    const dispatch = useDispatch();
    
    const {
        dashboardDataLoading,
        dashboardData,
        dashboardDataError,
        dashboardOrdersLoading,
        dashboardOrdersData,
        dashboardOrdersError,
    } = useSelector((state) => state.dashboard);

    const fetchDashboardData = async () => {
        dispatch(fetchDashBoardDataStart());

        try {
            const apiResponse = await dashboardApi.getFinancialOverview();
            const { status, data } = apiResponse;

            if (status === 200) dispatch(fetchDashboardDataSuccess(data));
        } catch (error) {
            dispatch(fetchDashboardDataError(error))
        };
    };

    const fetchDashboardOrders = async () => {
        dispatch(fetchDashboardShippingsStart());

        try {
            const apiResponse = await dashboardApi.getOrdersData();
            const { status, data } = apiResponse;

            if (status) dispatch(fetchDashboardOrdersSuccess(data));
        } catch (error) {
            dispatch(fetchDashboardOrdersFailure(error));
        };
    };

    return {
        dashboardDataLoading,
        dashboardData,
        dashboardDataError,
        fetchDashboardData,
        dashboardOrdersLoading,
        dashboardOrdersData,
        dashboardOrdersError,
        fetchDashboardOrders,
    }
};
