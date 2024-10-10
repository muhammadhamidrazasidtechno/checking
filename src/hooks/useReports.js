import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportsApi } from "../api/requests";
import {
  fetchReportsSuccess,
  fetchUserReportsSuccess,
  fetchIndividualReportSuccess,
  fetchUserIndividualReportSuccess,
} from "../features/reports/reportsSlice";

export const useReports = (searchQuery) => {
  const dispatch = useDispatch();
  const { reports, userReports, individualReport, userIndividualReport } =
    useSelector((state) => state.reports);

  // State for pagination
  const [currentPageReports, setCurrentPageReports] = useState(1);
  const [totalPagesReports, setTotalPagesReports] = useState(0);

  const [currentPageUserReports, setCurrentPageUserReports] = useState(1);
  const [totalPagesUserReports, setTotalPagesUserReports] = useState(0);

  const limit = 10; // Assuming you want 10 reports per page

  const changePageReports = (pageNumber) => {
    console.log(pageNumber);

    if (pageNumber > 0 && pageNumber <= totalPagesReports) {
      setCurrentPageReports(pageNumber);
    }
  };

  const changePageUserReports = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPagesUserReports) {
      console.log(pageNumber);

      setCurrentPageUserReports(pageNumber);
    }
  };

  useEffect(() => {
    fetchAllReports(currentPageReports, searchQuery);
  }, [currentPageReports, searchQuery]);

  useEffect(() => {
    fetchAllUserReports(currentPageUserReports, searchQuery);
  }, [currentPageUserReports, searchQuery]);

  const fetchAllReports = async (page, searchQuery) => {
    try {
      const apiResponse = await reportsApi.getAllReports({
        page,
        limit,
        searchQuery,
      });
      const { status, data } = apiResponse?.data;

      if (status) {
        setTotalPagesReports(data.totalPages);
        dispatch(fetchReportsSuccess(data.reports));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIndividualReport = async (reportId) => {
    try {
      const apiResponse = await reportsApi.getReportById(reportId);
      const { status, data } = apiResponse?.data;

      if (status) dispatch(fetchIndividualReportSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllUserReports = async (page, searchQuery) => {
    try {
      const apiResponse = await reportsApi.getAllUserReports({
        page,
        limit,
        searchQuery,
      });
      const { status, data } = apiResponse?.data;

      if (status) {
        setTotalPagesUserReports(data.totalPages);
        dispatch(fetchUserReportsSuccess(data.reports));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserIndividualReport = async (reportId) => {
    try {
      const apiResponse = await reportsApi.getUserReportById(reportId);
      const { status, data } = apiResponse?.data;

      if (status) dispatch(fetchUserIndividualReportSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    reports,
    individualReport,
    fetchIndividualReport,
    userReports,
    fetchAllUserReports,
    userIndividualReport,
    fetchUserIndividualReport,
    currentPageReports,
    totalPagesReports,
    changePageReports,
    currentPageUserReports,
    totalPagesUserReports,
    changePageUserReports,
  };
};
