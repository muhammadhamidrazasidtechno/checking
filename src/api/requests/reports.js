import axiosInstance from "../config";

export const reportsApi = {
  async getAllReports({ page, limit, searchQuery }) {
    try {
      const apiResponse = await axiosInstance.get(`/getReports`, {
        params: {
          page,
          limit,
          searching: searchQuery,
        },
      });
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async getReportById(reportId) {
    try {
      const apiResponse = await axiosInstance.get(`/getReport/${reportId}`);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async getAllUserReports({ page, limit, searchQuery }) {
    try {
      const apiResponse = await axiosInstance.get(`/getUsersReport`, {
        params: {
          page,
          limit,
          searching: searchQuery,
        },
      });
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async getUserReportById(userReportId) {
    try {
      const apiResponse = await axiosInstance.get(
        `/getUsersReport/${userReportId}`
      );
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
};
