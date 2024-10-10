import axiosInstance from "../config";

export const productsApi = {
  async getAllProducts({ page, limit, searchQuery }) {
    try {
      const apiResponse = await axiosInstance.get("/getAllProducts", {
        params: {
          page,
          limit,
          searching: searchQuery,
        },
      });
      return apiResponse;
    } catch (error) {}
  },
};
