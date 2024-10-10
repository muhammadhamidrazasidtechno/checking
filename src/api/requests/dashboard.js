import axiosInstance from "../config";

export const dashboardApi = {
    async getFinancialOverview() {
        try {
            const apiResponse = await axiosInstance.get('/overview-financial');
            return apiResponse;
        } catch (error) {
            console.log(error);
        };
    },
    async getOrdersData() {
        try {
            const apiResponse = await axiosInstance.get('/shipping-Metrics');
            return apiResponse;
        } catch (error) {
            console.log(error);
        };
    },
}
