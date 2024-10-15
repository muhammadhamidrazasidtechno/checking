// src/pages/EmployeeManagement.tsx

import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';

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
    AppBar,
    Toolbar,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import styledComponents from 'styled-components';

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
    margin-bottom: 24px;
`;

const StyledPaper = styled(Paper)`
    padding: 24px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const StyledAppBar = styled(AppBar)`
    background-color: #1976d2;
`;

interface DirectReport {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;
}

interface TimeOffRequest {
    id: number;
    employeeName: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

interface AttendanceRecord {
    id: number;
    employeeName: string;
    date: string;
    status: 'Present' | 'Absent' | 'Late';
}

const EmployeeManagement: React.FC = () => {
    // Direct Reports State
    const [directReports, setDirectReports] = useState<DirectReport[]>([
        {
            id: 1,
            name: 'Alice Johnson',
            position: 'Nurse',
            email: 'alice.johnson@example.com',
            phone: '555-1234',
        },
        {
            id: 2,
            name: 'Bob Smith',
            position: 'Therapist',
            email: 'bob.smith@example.com',
            phone: '555-5678',
        },
    ]);

    const [selectedReport, setSelectedReport] = useState<DirectReport | null>(null);
    const [openReportDialog, setOpenReportDialog] = useState(false);

    // Time-Off Requests State
    const [timeOffRequests, setTimeOffRequests] = useState<TimeOffRequest[]>([
        {
            id: 1,
            employeeName: 'Alice Johnson',
            startDate: '2024-10-01',
            endDate: '2024-10-05',
            reason: 'Vacation',
            status: 'Pending',
        },
        {
            id: 2,
            employeeName: 'Bob Smith',
            startDate: '2024-09-15',
            endDate: '2024-09-20',
            reason: 'Medical',
            status: 'Approved',
        },
    ]);

    // Attendance Tracking State
    const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
        {
            id: 1,
            employeeName: 'Alice Johnson',
            date: '2024-09-01',
            status: 'Present',
        },
        {
            id: 2,
            employeeName: 'Bob Smith',
            date: '2024-09-01',
            status: 'Late',
        },
    ]);

    // Handlers for Direct Reports
    const handleOpenReportDialog = (report: DirectReport) => {
        setSelectedReport(report);
        setOpenReportDialog(true);
    };

    const handleCloseReportDialog = () => {
        setOpenReportDialog(false);
        setSelectedReport(null);
    };

    // Handlers for Time-Off Requests
    const handleUpdateRequestStatus = (id: number, status: 'Approved' | 'Rejected') => {
        setTimeOffRequests(
            timeOffRequests.map((request) =>
                request.id === id ? { ...request, status } : request
            )
        );
    };

    // Handlers for Attendance Tracking
    const handleUpdateAttendance = (id: number, status: 'Present' | 'Absent' | 'Late') => {
        setAttendanceRecords(
            attendanceRecords.map((record) =>
                record.id === id ? { ...record, status } : record
            )
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Employee Management
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Direct Reports */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Direct Reports
                                </Typography>
                                <List>
                                    {directReports.map((report) => (
                                        <ListItem key={report.id}>
                                        <ListItemButton onClick={() => handleOpenReportDialog(report)}>
                                            <ListItemIcon>
                                                <PersonIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary={report.name} secondary={report.position} />
                                        </ListItemButton>
                                    </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Time-Off Requests */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Time-Off Requests
                                </Typography>
                                <List>
                                    {timeOffRequests.map((request) => (
                                        <ListItem key={request.id}>
                                            <ListItemIcon>
                                                <EventIcon color="secondary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${request.employeeName}`}
                                                secondary={`From ${request.startDate} to ${request.endDate} - ${request.reason}`}
                                            />
                                            <Box>
                                                {request.status === 'Pending' && (
                                                    <>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                            onClick={() =>
                                                                handleUpdateRequestStatus(request.id, 'Approved')
                                                            }
                                                            sx={{ mr: 1 }}
                                                        >
                                                            Approve
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            size="small"
                                                            onClick={() =>
                                                                handleUpdateRequestStatus(request.id, 'Rejected')
                                                            }
                                                        >
                                                            Reject
                                                        </Button>
                                                    </>
                                                )}
                                                {request.status !== 'Pending' && (
                                                    <Typography variant="body2" color="textSecondary">
                                                        {request.status}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Attendance Tracking */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Attendance Tracking
                                </Typography>
                                <List>
                                    {attendanceRecords.map((record) => (
                                        <ListItem key={record.id}>
                                            <ListItemIcon>
                                                <PersonIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${record.employeeName}`}
                                                secondary={`Date: ${record.date}`}
                                            />
                                            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                                <InputLabel>Status</InputLabel>
                                                <Select
                                                    value={record.status}
                                                    onChange={(e) =>
                                                        handleUpdateAttendance(
                                                            record.id,
                                                            e.target.value as 'Present' | 'Absent' | 'Late'
                                                        )
                                                    }
                                                    label="Status"
                                                >
                                                    <MenuItem value="Present">Present</MenuItem>
                                                    <MenuItem value="Absent">Absent</MenuItem>
                                                    <MenuItem value="Late">Late</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Additional Features (Optional) */}
                        {/* You can add forms to add new direct reports, time-off requests, or attendance records here */}
                    </Grid>
                </StyledContainer>

                {/* Direct Report Detail Dialog */}
                <Dialog open={openReportDialog} onClose={handleCloseReportDialog}>
                    <DialogTitle>Direct Report Details</DialogTitle>
                    <DialogContent>
                        {selectedReport && (
                            <>
                                <DialogContentText>
                                    <strong>Name:</strong> {selectedReport.name}
                                </DialogContentText>
                                <DialogContentText>
                                    <strong>Position:</strong> {selectedReport.position}
                                </DialogContentText>
                                <DialogContentText>
                                    <strong>Email:</strong> {selectedReport.email}
                                </DialogContentText>
                                <DialogContentText>
                                    <strong>Phone:</strong> {selectedReport.phone}
                                </DialogContentText>
                            </>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseReportDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
};

export default EmployeeManagement;
