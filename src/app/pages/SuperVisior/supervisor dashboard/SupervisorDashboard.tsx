// src/components/SupervisorDashboard.tsx

import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Avatar,
    ListItemIcon,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f4f6f8',
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 500,
        },
    },
});

const StyledContainer = styled(Container)`
    margin-top: 24px;
`;

const StyledPaper = styled(Paper)`
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
`;

const StyledAppBar = styled(AppBar)`
    background-color: #1976d2;
`;

const SupervisorDashboard: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Supervisor Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Tasks Overview
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Task 1" secondary="Pending" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Task 2" secondary="In-progress" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <AssignmentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Task 3" secondary="Completed" />
                                    </ListItem>
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Schedule Overview
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Shift 1" secondary="10:00 AM - 6:00 PM" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Shift 2" secondary="6:00 PM - 2:00 AM" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <ScheduleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Shift 3" secondary="2:00 AM - 10:00 AM" />
                                    </ListItem>
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Notifications
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="New task assigned to you." />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Meeting scheduled at 3:00 PM." />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Shift change request approved." />
                                    </ListItem>
                                </List>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default SupervisorDashboard;