import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApi } from "../api/requests/users";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserDetailsStart,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  banUser,
  handleUserBanErrors,
} from "../features/users/usersSlice";

export const useUsers = (searchQuery) => {
  const { loading, error, userDetailsLoading, userDetails, userDetailsError } =
    useSelector((state) => state.users);
  const dispatch = useDispatch();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10); // Assuming you want 10 users per page

  useEffect(() => {
    fetchUsers(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchUsers = async (page, query) => {
    console.log(page);

    dispatch(fetchUsersStart());

    try {
      const apiResponse = await usersApi.getAllUsers({ page, limit, query });
      const { status, data } = apiResponse.data;

      if (status) {
        setUsers(data.result);
        setTotalPages(data.totalPages);
        dispatch(fetchUsersSuccess(data.result));
      }
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };

  const seeUserDetails = async (userId) => {
    dispatch(fetchUserDetailsStart());

    try {
      const apiResponse = await usersApi.getUserDetails(userId);
      const { data, status } = apiResponse.data;

      if (status) {
        dispatch(fetchUserDetailsSuccess(data));
      }
    } catch (error) {
      dispatch(fetchUserDetailsFailure(error));
    }
  };

  const handleUserBan = async (userId) => {
    try {
      const apiResponse = await usersApi.handleUserBan(userId);
      const { status } = apiResponse.data;

      if (status) dispatch(banUser());
    } catch (error) {
      dispatch(handleUserBanErrors(error));
    }
  };

  const changePage = (pageNumber) => {
    console.log("dskhdhk");

    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber); // Update currentPage state
      fetchUsers(pageNumber); // Call the fetch function to get new data
    }
  };

  return {
    loading,
    users,
    error,
    seeUserDetails,
    userDetailsLoading,
    userDetails,
    userDetailsError,
    handleUserBan,
    currentPage,
    totalPages,
    changePage, // Expose changePage to the component using this hook
  };
};
