import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productsApi } from "../api/requests";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
} from "../features/products/productsSlice";

export const useProducts = (searchQuery) => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10; // Assuming you want 10 products per page

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchProducts = async (page, searchQuery) => {
    dispatch(fetchProductsStart());

    try {
      const apiResponse = await productsApi.getAllProducts({
        page,
        limit,
        searchQuery,
      });

      const { status, data } = apiResponse.data;
      console.log(data);

      if (status) {
        dispatch(fetchProductsSuccess(data.products)); // Adjust based on your API response structure
        setTotalPages(data.totalPages); // Assuming the API returns total pages
      }
    } catch (error) {
      dispatch(fetchProductsError(error));
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
    products,
    error,
    currentPage,
    totalPages,
    changePage, // Expose changePage to the component using this hook
  };
};
