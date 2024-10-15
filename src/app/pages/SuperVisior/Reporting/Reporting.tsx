// src/pages/Reporting.tsx

import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    CircularProgress,
    Divider,
} from '@mui/material';
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
        h6: {
            fontWeight: 600,
        },
    },
});

const StyledContainer = styled(Container)`
    margin-top: 24px;
`;

const StyledPaper = styled(Paper)`
    padding: 24px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const GenerateReportForm = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ReportItem = styled(ListItem)`
    border-bottom: 1px solid #e0e0e0;
`;

const Reporting: React.FC = () => {
    const [reportType, setReportType] = useState('');
    const [reports, setReports] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateReport = () => {
        setIsLoading(true);
        // Simulate report generation
        setTimeout(() => {
            setReports([...reports, `Report on ${reportType} - ${new Date().toLocaleDateString()}`]);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default }}>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Generate Reports */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Generate Reports
                                </Typography>
                                <GenerateReportForm>
                                    <TextField
                                        fullWidth
                                        label="Select Report Type"
                                        value={reportType}
                                        onChange={(e) => setReportType(e.target.value)}
                                        margin="normal"
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleGenerateReport}
                                    >
                                        Generate Report
                                    </Button>
                                    {isLoading && (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                            <CircularProgress />
                                        </Box>
                                    )}
                                </GenerateReportForm>
                            </StyledPaper>
                        </Grid>

                        {/* Review Reports */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Review Reports
                                </Typography>
                                {reports.length > 0 ? (
                                    <List>
                                        {reports.map((report, index) => (
                                            <ReportItem key={index}>
                                                <ListItemText
                                                    primary={report}
                                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                                />
                                            </ReportItem>
                                        ))}
                                    </List>
                                ) : (
                                    <Typography variant="body2" color="textSecondary">
                                        No reports available. Generate a report to see it here.
                                    </Typography>
                                )}
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default Reporting;
