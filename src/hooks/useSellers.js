import { useEffect, useState } from "react"; // Add useState
import { useDispatch, useSelector } from "react-redux";

import { sellersApi } from "../api/requests";
import {
  fetchSellersStart,
  fetchSellersSuccess,
  fetchSellersFailure,
  fetchSellerDetailsStart,
  fetchSellerDetailsSuccess,
  fetchSellerDetailsFailure,
  banSeller,
  handleSellerBanErrors,
} from "../features/sellers/sellersSlice";

export const useSellers = (searchQuery) => {
  const dispatch = useDispatch();
  const {
    sellers,
    loading,
    error,
    sellerDetailsLoading,
    sellerDetails,
    sellerDetailsError,
  } = useSelector((state) => state.sellers);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10; // Assuming 10 sellers per page

  useEffect(() => {
    fetchSellers(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchSellers = async (page, searchQuery) => {
    dispatch(fetchSellersStart());

    try {
      const apiResponse = await sellersApi.getAllSellers({
        page,
        limit,
        searchQuery,
      });
      const { data, status } = apiResponse.data;

      if (status) {
        dispatch(fetchSellersSuccess(data.result));
        setTotalPages(data.totalPages); // Assuming API returns total pages
      }
    } catch (error) {
      dispatch(fetchSellersFailure());
    }
  };

  const seeSellerDetails = async (sellerId) => {
    dispatch(fetchSellerDetailsStart());

    try {
      const apiResponse = await sellersApi.getSellerDetails(sellerId);
      const { data, status } = apiResponse.data;

      if (status) dispatch(fetchSellerDetailsSuccess(data));

      console.log(data);
    } catch (error) {
      dispatch(fetchSellerDetailsFailure(error));
    }
  };

  const handleSellerBan = async (sellerId) => {
    try {
      const apiResponse = await sellersApi.handleSellerBan(sellerId);
      const { status } = apiResponse.data;

      if (status) dispatch(banSeller());
    } catch (error) {
      dispatch(handleSellerBanErrors(error));
    }
  };

  // Function to change the page
  const changePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    sellers,
    loading,
    error,
    seeSellerDetails,
    sellerDetailsLoading,
    sellerDetails,
    sellerDetailsError,
    handleSellerBan,
    currentPage,
    totalPages,
    changePage, // Expose changePage to the component using this hook
  };
};
