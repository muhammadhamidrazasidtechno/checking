// src/pages/TaskAssignment.tsx

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
    Avatar,
    Button,
    TextField,
    ListItemIcon,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
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

const TaskAssignment: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Task Assignment
                        </Typography>
                        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Assign Tasks
                                </Typography>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        label="Task Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Employee Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Deadline"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                    >
                                        Assign Task
                                    </Button>
                                </form>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Task Tracking
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
                        <Grid item xs={12}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Task Reports
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Report 1: Task 1 completed successfully." />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Report 2: Task 2 is in progress." />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Report 3: Task 3 pending approval." />
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

export default TaskAssignment;