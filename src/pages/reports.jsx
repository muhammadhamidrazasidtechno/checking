import { useEffect, useState } from "react";
import { useReports } from "../hooks";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Modal,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import Pagination from "../components/pagination";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "1rem 2rem",
};

const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchQuery, setSearchQuery] = useState("");

  const {
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
  } = useReports(searchQuery);

  const [dataToRender, setDataToRender] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      if (activeTab === "Tab 1") {
        await fetchAllUserReports();
      } else {
        await fetchAllUserReports();
      }
    };
    fetchReports();
  }, [activeTab]);

  useEffect(() => {
    const newDataToRender = activeTab === "Tab 1" ? reports : userReports;
    setDataToRender(
      newDataToRender.filter((report) =>
        activeTab === "Tab 1"
          ? report._id.includes(searchQuery) ||
            report.email.includes(searchQuery)
          : report.user._id.includes(searchQuery)
      )
    );
  }, [activeTab, reports, userReports, searchQuery]);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const seeReportDetails = (reportId) => {
    setIsModalOpen(true);
    const fetchReport =
      activeTab === "Tab 1" ? fetchIndividualReport : fetchUserIndividualReport;
    fetchReport(reportId);
  };

  const renderModalContent = () => {
    const report =
      activeTab === "Tab 1" ? individualReport : userIndividualReport;
    return Object.keys(report).length ? (
      <>
        <DetailItem label="Report ID:" value={report._id} />
        <DetailItem
          label="User ID:"
          value={activeTab === "Tab 1" ? report.user : report.user._id}
        />
        <DetailItem
          label="Email:"
          value={
            activeTab === "Tab 1"
              ? report.email
              : `${report.user.firstname} ${report.user.lastname}`
          }
        />
        <DetailItem
          label="Problem Description:"
          value={report.problem || report.report}
        />
        <DetailItem
          label="Details:"
          value={
            activeTab === "Tab 1" ? report.userDetails : report.reporterDetail
          }
        />
      </>
    ) : (
      <LoadingIndicator />
    );
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={style}>
          <Typography sx={{ textAlign: "center" }}>
            {activeTab === "Tab 1" ? "Report" : "User Report"}
          </Typography>
          <Box
            sx={{
              maxWidth: "20rem",
              width: "100%",
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {renderModalContent()}
          </Box>
        </Box>
      </Modal>

      <Box sx={{ marginBottom: "1rem" }}>
        <Tabs
          variant="scrollable"
          value={activeTab}
          onChange={handleTabChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Reports" value="Tab 1" />
          <Tab label="User Reports" value="Tab 2" />
        </Tabs>
      </Box>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Report ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>
                {activeTab === "Tab 1" ? "Problem" : "Reported User ID"}
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                {activeTab === "Tab 1" ? "User Details" : "Report Details"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToRender.map((report) => (
              <TableRow key={report._id}>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => seeReportDetails(report._id)}
                  >
                    {report._id}
                  </Button>
                </TableCell>
                <TableCell>
                  {activeTab === "Tab 1" ? report.email : report.user._id}
                </TableCell>
                <TableCell>
                  {activeTab === "Tab 1" ? report.problem : report.reportedUser}
                </TableCell>
                <TableCell>
                  {activeTab === "Tab 1" ? report.email : report.user._id}
                </TableCell>
                <TableCell>
                  {activeTab === "Tab 1"
                    ? report.userDetails
                    : report.reporterDetail}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          paginatedItem={{
            currentPage:
              activeTab === "Tab 1"
                ? currentPageReports
                : currentPageUserReports,
            lastPage:
              activeTab === "Tab 1" ? totalPagesReports : totalPagesUserReports,
          }}
          changePage={
            activeTab === "Tab 1" ? changePageReports : changePageUserReports
          }
        />
      </TableContainer>
    </Box>
  );
};

// Loading indicator component
const LoadingIndicator = () => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

// Detail item component for displaying details
const DetailItem = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography color="primary">{label}</Typography>
    <Typography>{value}</Typography>
  </Box>
);

export default Reports;
