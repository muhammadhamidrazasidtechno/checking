// src/pages/ActivityScheduling.tsx

import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box,
    TextField,
    Button,
    ListItemIcon,
    ListItemSecondaryAction,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    AppBar,
    Toolbar,
    IconButton,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DoneIcon from '@mui/icons-material/Done';
import PendingIcon from '@mui/icons-material/Pending';

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

const ActivityScheduling: React.FC = () => {
    const [activities, setActivities] = useState([
        { id: 1, activity: 'Morning Yoga', date: '2024-09-08', status: 'Pending' },
        { id: 2, activity: 'Art Class', date: '2024-09-10', status: 'Completed' },
    ]);

    const [newActivity, setNewActivity] = useState({
        activity: '',
        date: '',
        status: 'Pending',
    });

    const handleAddActivity = (e: React.FormEvent) => {
        e.preventDefault();
        setActivities([...activities, { id: activities.length + 1, ...newActivity }]);
        setNewActivity({ activity: '', date: '', status: 'Pending' });
    };

    const handleStatusChange = (id: number, status: string) => {
        setActivities(
            activities.map((activity) =>
                activity.id === id ? { ...activity, status } : activity
            )
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Activity Scheduling
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Add Activities Form */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Add Activity
                                </Typography>
                                <form onSubmit={handleAddActivity}>
                                    <TextField
                                        fullWidth
                                        label="Activity Name"
                                        value={newActivity.activity}
                                        onChange={(e) =>
                                            setNewActivity({
                                                ...newActivity,
                                                activity: e.target.value,
                                            })
                                        }
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="Activity Date"
                                        value={newActivity.date}
                                        onChange={(e) =>
                                            setNewActivity({
                                                ...newActivity,
                                                date: e.target.value,
                                            })
                                        }
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button type="submit" variant="contained" color="primary">
                                        Add Activity
                                    </Button>
                                </form>
                            </StyledPaper>
                        </Grid>

                        {/* Activity List */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Activity List
                                </Typography>
                                <List>
                                    {activities.map((activity) => (
                                        <ListItem key={activity.id}>
                                            <ListItemIcon>
                                                <EventNoteIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={activity.activity}
                                                secondary={`Date: ${activity.date}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <FormControl>
                                                    <InputLabel>Status</InputLabel>
                                                    <Select
                                                        value={activity.status}
                                                        onChange={(e) =>
                                                            handleStatusChange(
                                                                activity.id,
                                                                e.target.value as string
                                                            )
                                                        }
                                                    >
                                                        <MenuItem value="Pending">
                                                            <PendingIcon /> Pending
                                                        </MenuItem>
                                                        <MenuItem value="Completed">
                                                            <DoneIcon /> Completed
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default ActivityScheduling;
