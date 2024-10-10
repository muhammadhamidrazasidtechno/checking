import { useState } from "react";
import { useSellers } from "../hooks";
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
import CancelIcon from "@mui/icons-material/Cancel";
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

const Sellers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search
  const {
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
    changePage,
  } = useSellers(searchQuery);

  // Filter sellers based on search query
  const filteredSellers = sellers.filter(
    (seller) =>
      seller.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showSellerDetails = (sellerId) => {
    setIsModalOpen(true);
    seeSellerDetails(sellerId);
  };

  const tabs = [
    { label: "Tab 1", content: "Seller Info" },
    { label: "Tab 2", content: "Items To Sell" },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <TextField
        label="Search Sellers"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
        sx={{ marginBottom: "1rem" }}
      />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {sellerDetailsLoading ? (
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
                  value={activeTab.toString()}
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
                      {sellerDetails.firstname} {sellerDetails.lastname}
                    </Typography>

                    <Button
                      color={sellerDetails.isBan ? "primary" : "error"}
                      variant="contained"
                      onClick={() => handleSellerBan(sellerDetails._id)}
                    >
                      {sellerDetails.isBan ? "Unban" : "Ban"} Seller
                    </Button>
                  </Box>

                  {activeTab === "Tab 1" && (
                    <Box>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <AttachMoneyIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Balance"
                            value={sellerDetails.balance?.toString() || "0"} // Convert value to string
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <GroupIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Followers"
                            value={sellerDetails.followers?.toString() || "0"}
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <PersonAddIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Following"
                            value={sellerDetails.followings?.toString() || "0"}
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <ShoppingCartIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Total Products"
                            value={
                              sellerDetails?.sellerActivity?.sellerTotalProducts?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <CardGiftcardIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Giveaway Products"
                            value={
                              sellerDetails?.sellerActivity?.sellerTotalgiveAwayProducts?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <LiveTvIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Active Livestreams"
                            value={
                              sellerDetails?.sellerActivity?.sellerActiveLiveStreams?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <PendingIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Pending Orders"
                            value={
                              sellerDetails?.sellerActivity?.pendingOrder?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <LocalShippingIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Delivered Orders"
                            value={
                              sellerDetails?.sellerActivity?.deliveredOrder?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid xs={12} md={3} item>
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
                                <SvgIcon>
                                  <CancelIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="Canceled Orders"
                            value={
                              sellerDetails?.sellerActivity?.cancelledOrder?.toString() ||
                              "0"
                            }
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {!loading && !error && filteredSellers.length !== 0 ? ( // Use filtered sellers for rendering
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Image</TableCell>
                <TableCell>User</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSellers.map(
                (
                  seller,
                  index // Render filtered sellers
                ) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {seller.image ? (
                        <img
                          style={{ width: "3rem", height: "3rem" }}
                          src={`${
                            import.meta.env.VITE_APP_LINK_FOR_EXTERNAL_RESOURCES
                          }${seller.image}`}
                          alt=""
                        />
                      ) : (
                        <Typography>Image Not Found</Typography>
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`${seller.firstname} ${seller.lastname}`}
                    </TableCell>
                    <TableCell align="right">{seller.email}</TableCell>
                    <TableCell align="right">
                      {seller.gender || "NOT SELECTED"}
                    </TableCell>
                    <TableCell align="right">{seller._id}</TableCell>
                    <TableCell align="right">
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => showSellerDetails(seller._id)}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
          <Pagination
            paginatedItem={{
              currentPage: currentPage,
              lastPage: totalPages,
            }}
            changePage={changePage}
            disablePagination={loading}
          />
        </TableContainer>
      ) : loading ? (
        <h1>LOADING...</h1>
      ) : filteredSellers.length === 0 ? (
        <h1>No Records Found...</h1>
      ) : (
        <h1>Something Went Wrong...</h1>
      )}
    </Box>
  );
};

export default Sellers;
