// src/pages/DoctorAppointments.tsx

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
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
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

const DoctorAppointments: React.FC = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, resident: 'John Doe', doctor: 'Dr. Smith', date: '2024-09-10', status: 'Pending' },
        { id: 2, resident: 'Jane Doe', doctor: 'Dr. Adams', date: '2024-09-12', status: 'Completed' },
    ]);

    const [newAppointment, setNewAppointment] = useState({
        resident: '',
        doctor: '',
        date: '',
        status: 'Pending',
    });

    const handleAddAppointment = (e: React.FormEvent) => {
        e.preventDefault();
        setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment }]);
        setNewAppointment({ resident: '', doctor: '', date: '', status: 'Pending' });
    };

    const handleStatusChange = (id: number, status: string) => {
        setAppointments(
            appointments.map((appointment) =>
                appointment.id === id ? { ...appointment, status } : appointment
            )
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Doctor Appointments
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Schedule Appointments Form */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Schedule Appointment
                                </Typography>
                                <form onSubmit={handleAddAppointment}>
                                    <TextField
                                        fullWidth
                                        label="Resident Name"
                                        value={newAppointment.resident}
                                        onChange={(e) =>
                                            setNewAppointment({
                                                ...newAppointment,
                                                resident: e.target.value,
                                            })
                                        }
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Doctor Name"
                                        value={newAppointment.doctor}
                                        onChange={(e) =>
                                            setNewAppointment({
                                                ...newAppointment,
                                                doctor: e.target.value,
                                            })
                                        }
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="Appointment Date"
                                        value={newAppointment.date}
                                        onChange={(e) =>
                                            setNewAppointment({
                                                ...newAppointment,
                                                date: e.target.value,
                                            })
                                        }
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button type="submit" variant="contained" color="primary">
                                        Schedule Appointment
                                    </Button>
                                </form>
                            </StyledPaper>
                        </Grid>

                        {/* Appointment List */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Appointment List
                                </Typography>
                                <List>
                                    {appointments.map((appointment) => (
                                        <ListItem key={appointment.id}>
                                            <ListItemIcon>
                                                <EventAvailableIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${appointment.resident} - ${appointment.doctor}`}
                                                secondary={`Date: ${appointment.date}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <FormControl>
                                                    <InputLabel>Status</InputLabel>
                                                    <Select
                                                        value={appointment.status}
                                                        onChange={(e) =>
                                                            handleStatusChange(
                                                                appointment.id,
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

export default DoctorAppointments;
