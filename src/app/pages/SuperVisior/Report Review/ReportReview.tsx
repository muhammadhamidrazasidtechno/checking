// src/pages/ReportReview.tsx

import React, { useState } from 'react';
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
    IconButton,
    ListItemSecondaryAction,
    AppBar,
    
    Toolbar
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

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

const ReportReview: React.FC = () => {
    const [reports, setReports] = useState([
        { id: 1, title: 'Monthly Sales Report', employee: 'John Doe', status: 'Pending' },
        { id: 2, title: 'Customer Feedback Analysis', employee: 'Jane Smith', status: 'Pending' },
    ]);

    const handleApprove = (id: number) => {
        setReports(reports.map(report => (report.id === id ? { ...report, status: 'Approved' } : report)));
    };

    const handleSendBack = (id: number) => {
        setReports(reports.map(report => (report.id === id ? { ...report, status: 'Needs Correction' } : report)));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Report Review and Approval
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Filed Reports
                                </Typography>
                                <List>
                                    {reports.map((report) => (
                                        <ListItem key={report.id}>
                                            <ListItemText
                                                primary={report.title}
                                                secondary={`Employee: ${report.employee}, Status: ${report.status}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    edge="end"
                                                    color="primary"
                                                    onClick={() => handleApprove(report.id)}
                                                >
                                                    <CheckIcon />
                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    color="secondary"
                                                    onClick={() => handleSendBack(report.id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Review Interface
                                </Typography>
                                {/* Detailed view of each report with options to approve or send back for corrections */}
                                {/* This can be expanded based on your requirements */}
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default ReportReview;