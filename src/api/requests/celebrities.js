import axiosInstance from "../config";

export const celebritiesApi = {
  async getAllCelebrities({ page, limit, query }) {
    try {
      const apiResponse = await axiosInstance("/getCelebrities", {
        params: {
          page,
          limit,
          searching: query,
        },
      });
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async getCelebrityDetails(celebrityId) {
    try {
      const apiResponse = axiosInstance.get(
        `/getCelebrityDetail/${celebrityId}`
      );
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async handleCelebrityBan(userId) {
    try {
      const apiResponse = await axiosInstance.post("/banUser", {
        userId: userId,
      });
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
};
