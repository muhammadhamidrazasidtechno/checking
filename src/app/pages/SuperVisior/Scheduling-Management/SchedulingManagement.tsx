// src/pages/SchedulingManagement.tsx

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
    Button,
    ListItemSecondaryAction,
    IconButton,
    AppBar,
    Toolbar,
    Avatar,
    ListItemIcon,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ScheduleIcon from '@mui/icons-material/Schedule';

const localizer = momentLocalizer(moment);

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

const events = [
    {
        title: 'Team Meeting',
        start: new Date(),
        end: new Date(moment().add(1, 'hours').toDate()),
    },
    {
        title: 'Shift 1',
        start: new Date(moment().add(1, 'days').toDate()),
        end: new Date(moment().add(1, 'days').add(8, 'hours').toDate()),
    },
];

const SchedulingManagement: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Scheduling Management
                        </Typography>
                        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Time Off Requests
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="John Doe - 3 days off" secondary="Pending" />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" color="primary">
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton edge="end" color="secondary">
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Jane Smith - 1 day off" secondary="Pending" />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" color="primary">
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton edge="end" color="secondary">
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Shift Management
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <SwapHorizIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Shift swap request from John Doe" secondary="Pending" />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" color="primary">
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton edge="end" color="secondary">
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemIcon>
                                            <SwapHorizIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Shift swap request from Jane Smith" secondary="Pending" />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" color="primary">
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton edge="end" color="secondary">
                                                <CloseIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Calendar View
                                </Typography>
                                <Calendar
                                    localizer={localizer}
                                    events={events}
                                    startAccessor="start"
                                    endAccessor="end"
                                    style={{ height: 500 }}
                                />
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default SchedulingManagement;