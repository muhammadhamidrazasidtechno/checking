import { useState } from "react";
import { useCelebrities } from "../hooks";
import {
  Paper,
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
  Grid,
  Typography,
  SvgIcon,
  Avatar,
  TextField,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PendingIcon from "@mui/icons-material/Pending";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { OverviewSummary } from "../sections/overview/overview-summary";
import Pagination from "../components/pagination";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Celebrities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    loading,
    celebrities,
    error,
    seeCelebrityDetails,
    celebrityDetailsLoading,
    celebrityDetails,
    handleCelebrityBan,
    currentPage,
    totalPages,
    changePage,
  } = useCelebrities(searchQuery);

  const showCelebrityDetails = (celebrityId) => {
    setIsModalOpen(true);
    seeCelebrityDetails(celebrityId);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [{ label: "Tab 1", content: "Celebrity Info" }];

  return (
    <Box sx={{ padding: "2rem" }}>
      <TextField
        label="Search Celebrities"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {celebrityDetailsLoading ? (
            <CircularProgress />
          ) : (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "stretch",
                  height: "80vh",
                  width: "80vw",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  outline: "none",
                  margin: "auto",
                }}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={activeTab}
                  onChange={handleTabChange}
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.content} value={tab.label} />
                  ))}
                </Tabs>

                <Box sx={{ marginLeft: 2, width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "2rem 3rem",
                    }}
                  >
                    <Typography sx={{ color: "gray" }}>
                      {celebrityDetails.firstname} {celebrityDetails.lastname}
                    </Typography>

                    <Button
                      color={celebrityDetails.isBan ? "primary" : "error"}
                      variant="contained"
                      onClick={() => handleCelebrityBan(celebrityDetails._id)}
                    >
                      {celebrityDetails.isBan ? "Unban" : "Ban"} Celebrity
                    </Button>
                  </Box>

                  {activeTab === "Tab 1" && (
                    <Box>
                      <Grid container spacing={3}>
                        {[
                          {
                            icon: <AttachMoneyIcon />,
                            label: "Balance",
                            value: celebrityDetails.balance || 0,
                          },
                          {
                            icon: <GroupIcon />,
                            label: "Followers",
                            value: celebrityDetails.followers,
                          },
                          {
                            icon: <PersonAddIcon />,
                            label: "Following",
                            value: celebrityDetails.followings,
                          },
                          {
                            icon: <ShoppingCartIcon />,
                            label: "Total Products",
                            value:
                              celebrityDetails?.celebrityActivity
                                ?.celebrityTotalProducts,
                          },
                          {
                            icon: <CardGiftcardIcon />,
                            label: "Giveaway Products",
                            value:
                              celebrityDetails?.celebrityActivity
                                ?.celebrityTotalgiveAwayProducts,
                          },
                          {
                            icon: <LiveTvIcon />,
                            label: "Active Livestreams",
                            value:
                              celebrityDetails?.celebrityActivity
                                ?.celebrityActiveLiveStreams,
                          },
                          {
                            icon: <PendingIcon />,
                            label: "Pending Orders",
                            value:
                              celebrityDetails?.celebrityActivity?.pendingOrder,
                          },
                          {
                            icon: <LocalShippingIcon />,
                            label: "Delivered Orders",
                            value:
                              celebrityDetails?.celebrityActivity
                                ?.deliveredOrder,
                          },
                        ].map((item, index) => (
                          <Grid xs={12} md={3} item key={index}>
                            <OverviewSummary
                              icon={
                                <Avatar
                                  sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    height: 56,
                                    width: 56,
                                  }}
                                >
                                  <SvgIcon>{item.icon}</SvgIcon>
                                </Avatar>
                              }
                              label={item.label}
                              value={item.value?.toString() || "0"} // Convert value to string, default to "0" if undefined
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {!loading && !error && celebrities.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>User</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {celebrities.map((celebrity, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {celebrity.image ? (
                      <img
                        style={{ width: "3rem", height: "3rem" }}
                        src={`${
                          import.meta.env.VITE_APP_LINK_FOR_EXTERNAL_RESOURCES
                        }${celebrity.image}`}
                        alt=""
                      />
                    ) : (
                      <Typography>Image Not Found</Typography>
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {`${celebrity.firstname} ${celebrity.lastname}`}
                  </TableCell>
                  <TableCell align="right">{celebrity.email}</TableCell>
                  <TableCell align="right">{celebrity.phonenumber}</TableCell>
                  <TableCell align="right">
                    {celebrity.gender || "NOT SELECTED"}
                  </TableCell>
                  <TableCell align="right">{celebrity._id}</TableCell>
                  <TableCell align="right">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => showCelebrityDetails(celebrity._id)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            paginatedItem={{
              currentPage,
              lastPage: totalPages,
            }}
            changePage={changePage}
            disablePagination={loading}
          />
        </TableContainer>
      ) : loading ? (
        <h1>LOADING...</h1>
      ) : celebrities.length === 0 ? (
        <h1>No Records Found...</h1>
      ) : (
        <h1>Something Went Wrong...</h1>
      )}
    </Box>
  );
};

export default Celebrities;
