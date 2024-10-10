import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { celebritiesApi } from "../api/requests";
import {
  fetchCelebritiesStart,
  fetchCelebritiesSuccess,
  fetchCelebritiesFailure,
  fetchCelebrityDetailsStart,
  fetchCelebrityDetailsSuccess,
  fetchCelebrityDetailsFailure,
  banCelebrity,
  handleCelebrityBanErrors,
} from "../features/celebrities/celebritiesSlice";

export const useCelebrities = (searchQuery) => {
  const dispatch = useDispatch();
  const {
    loading,
    celebrities,
    error,
    celebrityDetailsLoading,
    celebrityDetails,
    celebrityDetailsError,
  } = useSelector((state) => state.celebrities);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10; // Assuming 10 celebrities per page

  useEffect(() => {
    fetchCelebrities(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchCelebrities = async (page, query) => {
    dispatch(fetchCelebritiesStart());

    try {
      const apiResponse = await celebritiesApi.getAllCelebrities({
        page,
        limit,
        query,
      });
      const { status, data } = apiResponse.data;

      if (status) {
        dispatch(fetchCelebritiesSuccess(data.result));
        setTotalPages(data.totalPages); // Assuming API returns total pages
      }
    } catch (error) {
      dispatch(fetchCelebritiesFailure(error));
    }
  };

  const seeCelebrityDetails = async (celebrityId) => {
    dispatch(fetchCelebrityDetailsStart());

    try {
      const apiResponse = await celebritiesApi.getCelebrityDetails(celebrityId);
      const { data, status } = apiResponse.data;

      if (status) dispatch(fetchCelebrityDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchCelebrityDetailsFailure(error));
    }
  };

  const handleCelebrityBan = async (celebrityId) => {
    try {
      const apiResponse = await celebritiesApi.handleCelebrityBan(celebrityId);
      const { status } = apiResponse.data;

      if (status) dispatch(banCelebrity());
    } catch (error) {
      dispatch(handleCelebrityBanErrors(error));
    }
  };

  // Function to change the page
  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    loading,
    celebrities,
    error,
    seeCelebrityDetails,
    celebrityDetailsLoading,
    celebrityDetails,
    celebrityDetailsError,
    handleCelebrityBan,
    currentPage,
    totalPages,
    changePage, // Expose changePage to the component using this hook
  };
};
