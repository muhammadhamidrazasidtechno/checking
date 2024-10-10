import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminApi } from "../api/requests/admin";
import {
  fetchAllAdmins,
  deleteAdmin,
  createAdmin,
} from "../features/admin/adminSlice";

export const useAdmins = (searchQuery) => {
  const { admins } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 10; // Items per page

  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    fetchAdmins(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchAdmins = async (page, query) => {
    try {
      setLoading(true);
      const apiResponse = await adminApi.getAllAdmins({ page, limit, query });
      const { data } = apiResponse.data;
      dispatch(fetchAllAdmins(data.result));
      setTotalPages(data.totalPages); // Assuming your API returns total pages
    } catch (err) {
      dispatch(fetchAllAdmins([]));
      console.error("Failed to fetch admins:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdminDelete = async (adminId) => {
    try {
      const apiResponse = await adminApi.deleteAdmin(adminId);
      const { status } = apiResponse.data;

      if (status) {
        dispatch(deleteAdmin(adminId));
      } else {
        console.error("Failed to delete admin");
      }
    } catch (err) {
      console.error("Failed to delete admin:", err);
    }
  };

  const handleCreateAdmin = async (adminData) => {
    try {
      const apiResponse = await adminApi.registerAdmin(adminData);
      const { status, data } = apiResponse.data;

      if (status) {
        dispatch(createAdmin(data));
      } else {
        console.error("Failed to create admin");
      }
    } catch (err) {
      console.error("Failed to create admin:", err);
    }
  };

  return {
    admins,
    handleAdminDelete,
    handleCreateAdmin,
    currentPage,
    changePage,
    totalPages,
    loading,
  };
};
