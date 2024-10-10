import axiosInstance from "../config";

export const sellersApi = {
  async getAllSellers({ page, limit, searchQuery }) {
    try {
      console.log(searchQuery);

      const apiResponse = await axiosInstance.get("/getSellers", {
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
  async getSellerDetails(sellerId) {
    try {
      const apiResponse = await axiosInstance(`/getSellerDetail/${sellerId}`);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  },
  async handleSellerBan(userId) {
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
