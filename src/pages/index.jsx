import { useEffect, useState } from 'react';
import { convertDate } from '../utils';

import { Helmet } from 'react-helmet-async';
import { subDays, subHours, subMinutes } from 'date-fns';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import PendingIcon from '@mui/icons-material/Pending';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import {
  Avatar,
  Box,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
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
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { OverviewSummary } from '../sections/overview/overview-summary';
import { useDashboardData } from '../hooks';
import { useSelector } from 'react-redux';

import { DATA_NOT_LOADED, LOAD_DATA_INSTRUCTION } from '../constants';

const now = new Date();

const Page = () => {
  const [displayData, setDisplayData] = useState(false);
  const [activeTab, setActiveTab] = useState('Tab 1');
  const auth = useSelector((state) => state.auth);

  const {
    dashboardDataLoading,
    dashboardData,
    dashboardDataError,
    fetchDashboardData,
    dashboardOrdersLoading,
    dashboardOrdersData,
    dashboardOrdersError,
    fetchDashboardOrders,
  } = useDashboardData();

  useEffect(() => {
    if (auth.token && dashboardData && !dashboardDataError) {
      setDisplayData(true);
    } else {
      setDisplayData(false);
    }
  }, [auth.token, dashboardData]);

  const handleLoadFinancialOverviewData = () => {
    fetchDashboardData();
  };

  const handleLoadOrdersData = () => {
    fetchDashboardOrders();
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [
    { label: 'Tab 1', content: 'Real Time Shipping', property: 'realTimeShipping' },
    { label: 'Tab 2', content: 'Pending Shipments', property: 'pendingShipments' },
    { label: 'Tab 3', content: 'Shipment History', property: 'shipmentHistory' },
  ];

  return (
    <>
      <Helmet>
        <title>
          Iimiin Admin Panel
        </title>
      </Helmet>
      <Box
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div
              style={{
                display: 'flex',
                gap: '1rem'
              }}
            >
              <Typography variant="h4">
                Financial Overview
              </Typography>
              {auth.token && (
                <Button
                  color='primary'
                  variant='contained'
                  onClick={() => handleLoadFinancialOverviewData()}
                  sx={{

                  }}
                >
                  {dashboardData ? 'Reload' : 'Load'} Data
                </Button>
              )}
            </div>

            <div>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={4}
                >
                  <OverviewSummary
                    icon={dashboardDataLoading ? (
                      <CircularProgress />
                    ) : (
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          height: 56,
                          width: 56
                        }}
                      >
                        <SvgIcon>
                          <ShoppingBagIcon />
                        </SvgIcon>
                      </Avatar>
                    )
                    }
                    label='Total Sales'
                    value={`${displayData ? dashboardData.totalSales : dashboardDataError ? DATA_NOT_LOADED : LOAD_DATA_INSTRUCTION}`}
                  />
                </Grid>

                <Grid
                  xs={12}
                  md={4}
                >
                  <OverviewSummary
                    icon={dashboardDataLoading ? (

                      <CircularProgress />

                    ) : (
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          height: 56,
                          width: 56
                        }}
                      >
                        <SvgIcon>
                          <PendingIcon />
                        </SvgIcon>
                      </Avatar>
                    )
                    }
                    label='Pending Payouts'
                    value={`${displayData ? dashboardData.pendingPayouts : dashboardDataError ? DATA_NOT_LOADED : LOAD_DATA_INSTRUCTION}`}
                  />
                </Grid>

                <Grid
                  xs={12}
                  md={4}
                >
                  <OverviewSummary
                    icon={dashboardDataLoading ? (
                      <CircularProgress />
                    ) : (
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          height: 56,
                          width: 56
                        }}
                      >
                        <SvgIcon>
                          <CurrencyDollarIcon />
                        </SvgIcon>
                      </Avatar>
                    )
                    }
                    label='Recent Transactions'
                    value={`${displayData ? dashboardData.recentTransactions : dashboardDataError ? DATA_NOT_LOADED : LOAD_DATA_INSTRUCTION}`}
                  />
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Tabs
                          orientation="horizontal"
                          variant="scrollable"
                          value={activeTab.toString()}
                          onChange={handleTabChange}
                          sx={{
                              borderRight: 1,
                              borderColor: 'divider',
                              marginBlock: '2rem'
                          }}
                    >
                      {tabs.map((tab, index) => (
                          <Tab
                              key={index}
                              label={tab.content}
                              value={tab.label}
                          />
                      ))}
                    </Tabs>
                    {auth.token && (
                      <Button
                        variant='contained'
                        onClick={handleLoadOrdersData}
                      >
                        {dashboardOrdersData ? 'Reload' : 'Load'} Orders Data
                      </Button>
                    )}
                  </Box>
                  <Box>
                    {!dashboardOrdersData ? (
                      <h1>LOAD DATA</h1>
                    ) : (
                      <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="users table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="right">Order ID</TableCell>
                              <TableCell>Customer</TableCell>
                              <TableCell align="right">Shipping Status</TableCell>
                              <TableCell align="right">Total Amount</TableCell>
                              <TableCell align="right">Payment Status</TableCell>
                              <TableCell align="right">Tracking Code</TableCell>
                              <TableCell align="right">Created At</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dashboardOrdersData[tabs[tabs.findIndex((tab) => tab.label === activeTab)].property].map((order) => (
                              <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {order.orderid}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {order.customerName}
                                </TableCell>
                                <TableCell align="right">{order.shippingStatus}</TableCell>
                                <TableCell align="right">{order.totalAmount}</TableCell>
                                <TableCell align="right">{order.paymentStatus}</TableCell>
                                <TableCell align="right">{order.trackingCode}</TableCell>
                                <TableCell align="right" >{convertDate(order.createdAt)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  )
};

export default Page;
