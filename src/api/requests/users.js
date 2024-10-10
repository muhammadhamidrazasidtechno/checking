import axiosInstance from "../config";

export const usersApi = {
  async getAllUsers({ page, limit, query }) {
    console.log(query);

    try {
      const response = await axiosInstance.get("/getUsers", {
        params: {
          page,
          limit,
          searching: query,
        },
      });
      return response; // Return the response
    } catch (error) {
      console.log(error);
      throw error; // Throw error to handle it in the calling function
    }
  },

  async getUserDetails(userId) {
    try {
      const apiResponse = await axiosInstance.get(`/getUserDetail/${userId}`);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async handleUserBan(userId) {
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
