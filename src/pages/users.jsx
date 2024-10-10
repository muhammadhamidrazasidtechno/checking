import { useState, useEffect } from "react";
import { useUsers } from "../hooks";
import { convertDate } from "../utils";

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
  Typography,
  SvgIcon,
  Grid,
  Avatar,
  TextField,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import LoginIcon from "@mui/icons-material/Login";
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

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search

  const {
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
    changePage,
  } = useUsers(searchQuery);

  const showUserDetails = (userId) => {
    setIsModalOpen(true);
    seeUserDetails(userId);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [
    { label: "Tab 1", content: "User Info" },
    { label: "Tab 2", content: "Retention" },
  ];

  return (
    <Box sx={{ padding: "2rem" }}>
      <TextField
        label="Search Users"
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
          {userDetailsLoading ? (
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
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
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
                      {userDetails.firstname} {userDetails.lastname}
                    </Typography>

                    <Button
                      color={userDetails.isBan ? "primary" : "error"}
                      variant="contained"
                      onClick={() => handleUserBan(userDetails._id)}
                    >
                      {userDetails.isBan ? "Unban" : "Ban"} User
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
                            value={userDetails.balance?.toString() || "0"}
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
                            value={userDetails.followers?.toString() || "0"}
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
                            value={userDetails.followings?.toString() || "0"}
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
                                  <StackedLineChartIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="User Activity"
                            value={
                              userDetails?.userActivity?.totalOrder?.toString() ||
                              "0"
                            }
                          />
                        </Grid>

                        <Grid
                          onClick={() => setActiveTab("Tab 2")}
                          xs={12}
                          md={3}
                          item
                        >
                          <OverviewSummary
                            icon={
                              <Avatar
                                sx={{
                                  backgroundColor: "primary.main",
                                  color: "primary.contrastText",
                                  height: 56,
                                  width: 56,
                                  cursor: "pointer",
                                }}
                              >
                                <SvgIcon>
                                  <LoginIcon />
                                </SvgIcon>
                              </Avatar>
                            }
                            label="User Engagement"
                            value={
                              userDetails?.userEngagement?.totalLogin?.toString() ||
                              "0"
                            }
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  {activeTab === "Tab 2" &&
                    (userDetails.retention.length ? (
                      <TableContainer
                        component={Paper}
                        sx={{
                          width: "100%",
                          maxHeight: "70%",
                          overflowY: "scroll",
                        }}
                      >
                        <Table
                          sx={{ width: "100%" }}
                          aria-label="user retentions"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="right">Action</TableCell>
                              <TableCell align="right">Log in Time</TableCell>
                              <TableCell align="right">Log out Time</TableCell>
                              <TableCell align="right">Duration</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {userDetails.retention.map((retention, index) => (
                              <TableRow
                                key={index}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell align="right">
                                  {retention.action}
                                </TableCell>
                                <TableCell align="right">
                                  {convertDate(retention.loginTime)}
                                </TableCell>
                                <TableCell align="right">
                                  {convertDate(retention.logoutTime)}
                                </TableCell>
                                <TableCell align="right">
                                  {retention.duration}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    ) : (
                      <Typography sx={{ margin: "50% 50%", display: "inline" }}>
                        No Records Found...
                      </Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>

      {!loading && !error && users.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Image</TableCell>
                <TableCell>User</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.image ? (
                      <img
                        style={{ width: "3rem" }}
                        src={`${
                          import.meta.env.VITE_APP_LINK_FOR_EXTERNAL_RESOURCES
                        }${user.image}`}
                        alt={`${user.firstname} ${user.lastname}`}
                      />
                    ) : (
                      <Typography>Image Not Found</Typography>
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {`${user.firstname} ${user.lastname}`}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.phonenumber}</TableCell>
                  <TableCell align="right">{user.gender}</TableCell>
                  <TableCell align="right">{user._id}</TableCell>
                  <TableCell align="right">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => showUserDetails(user._id)}
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
              currentPage: currentPage,
              lastPage: totalPages,
            }}
            changePage={changePage}
            disablePagination={loading}
          />
        </TableContainer>
      ) : loading ? (
        <h1>LOADING...</h1>
      ) : users.length === 0 ? (
        <h1>No Records Found...</h1>
      ) : (
        <h1>Something Went Wrong...</h1>
      )}
    </Box>
  );
};

export default Users;
