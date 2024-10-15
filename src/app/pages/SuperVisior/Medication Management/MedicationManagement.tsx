// src/pages/MedicationManagement.tsx

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
    TextField,
    Button,
    IconButton,
    ListItemSecondaryAction,
    ListItemIcon,
    Toolbar,
    AppBar
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MedicationIcon from '@mui/icons-material/Medication';

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

const MedicationManagement: React.FC = () => {
    const [medLogs, setMedLogs] = useState([
        { id: 1, medication: 'Aspirin', dosage: '100mg', time: '08:00 AM', patient: 'John Doe' },
        { id: 2, medication: 'Ibuprofen', dosage: '200mg', time: '12:00 PM', patient: 'Jane Smith' },
    ]);

    const [stock, setStock] = useState([
        { id: 1, medication: 'Aspirin', quantity: 50 },
        { id: 2, medication: 'Ibuprofen', quantity: 30 },
    ]);

    const handleStockChange = (id: number, change: number) => {
        setStock(stock.map(item => (item.id === id ? { ...item, quantity: item.quantity + change } : item)));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Medication Management
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Medication Logs
                                </Typography>
                                <List>
                                    {medLogs.map((log) => (
                                        <ListItem key={log.id}>
                                            <ListItemIcon>
                                                <MedicationIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${log.medication} - ${log.dosage}`}
                                                secondary={`Time: ${log.time}, Patient: ${log.patient}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Stock Control
                                </Typography>
                                <List>
                                    {stock.map((item) => (
                                        <ListItem key={item.id}>
                                            <ListItemText
                                                primary={item.medication}
                                                secondary={`Quantity: ${item.quantity}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    edge="end"
                                                    color="primary"
                                                    onClick={() => handleStockChange(item.id, 1)}
                                                >
                                                    <AddIcon />
                                                </IconButton>
                                                <IconButton
                                                    edge="end"
                                                    color="secondary"
                                                    onClick={() => handleStockChange(item.id, -1)}
                                                    disabled={item.quantity <= 0}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
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

export default MedicationManagement;