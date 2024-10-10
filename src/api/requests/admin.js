import axiosInstance from "../config";

export const adminApi = {
  async registerAdmin(adminData) {
    try {
      return await axiosInstance.post("/createAdmin", adminData);
    } catch (error) {
      console.error("Error registering admin:", error);
      throw error; // Rethrow to handle in the hook
    }
  },
  async logInAdmin(logInData) {
    try {
      return await axiosInstance.post("/adminLogin", logInData);
    } catch (error) {
      console.error("Error logging in admin:", error);
      throw error;
    }
  },
  async deleteAdmin(adminId) {
    try {
      return await axiosInstance.delete(`/delete/${adminId}`);
    } catch (error) {
      console.error("Error deleting admin:", error);
      throw error;
    }
  },
  async getAdminById(adminId) {
    try {
      return await axiosInstance.get(`/getByID/${adminId}`);
    } catch (error) {
      console.error("Error fetching admin by ID:", error);
      throw error;
    }
  },
  async getAllAdmins({ page, limit, query }) {
    try {
      return await axiosInstance.get("/getAdmins", {
        params: {
          page,
          limit,
          searching: query, // Pass the search query to the API
        },
      });
    } catch (error) {
      console.error("Error fetching all admins:", error);
      throw error;
    }
  },
  async updateAdmin(adminId, updatedAdminData) {
    try {
      return await axiosInstance.put(
        `/updateadmin/${adminId}`,
        updatedAdminData
      );
    } catch (error) {
      console.error("Error updating admin:", error);
      throw error;
    }
  },
};
