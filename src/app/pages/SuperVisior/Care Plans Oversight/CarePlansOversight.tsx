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
    AppBar,
    Toolbar,
    ListItemSecondaryAction,
    Card,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MessageIcon from '@mui/icons-material/Message';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
            fontSize: '2rem',
        },
        h6: {
            fontWeight: 500,
        },
        body2: {
            fontSize: '0.875rem',
            color: '#666',
        },
    },
});

const StyledContainer = styled(Container)`
    margin-top: 24px;
`;

const StyledPaper = styled(Paper)`
    padding: 24px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const StyledAppBar = styled(AppBar)`
    background-color: #1976d2;
`;

const CarePlansOversight: React.FC = () => {
    const [carePlans, setCarePlans] = useState([
        { id: 1, patient: 'John Doe', plan: 'Diabetes Management', progress: '50%' },
        { id: 2, patient: 'Jane Smith', plan: 'Hypertension Management', progress: '30%' },
    ]);

    const [newPlan, setNewPlan] = useState({ patient: '', plan: '' });

    const handleUpdatePlan = (id: number, progress: string) => {
        setCarePlans(carePlans.map(plan => (plan.id === id ? { ...plan, progress } : plan)));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Care Plans Oversight
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Care Plans List */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Care Plans List
                                </Typography>
                                <List>
                                    {carePlans.map((plan) => (
                                        <ListItem key={plan.id}>
                                            <ListItemIcon>
                                                <AssignmentIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={plan.patient}
                                                secondary={plan.plan}
                                            />
                                            <ListItemSecondaryAction>
                                                <Typography variant="body2">
                                                    {plan.progress}
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Update Care Plans */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Update Care Plans
                                </Typography>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setCarePlans([...carePlans, { id: carePlans.length + 1, ...newPlan, progress: '0%' }]);
                                        setNewPlan({ patient: '', plan: '' });
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Patient"
                                        value={newPlan.patient}
                                        onChange={(e) => setNewPlan({ ...newPlan, patient: e.target.value })}
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Care Plan"
                                        value={newPlan.plan}
                                        onChange={(e) => setNewPlan({ ...newPlan, plan: e.target.value })}
                                        margin="normal"
                                    />
                                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Add Care Plan
                                    </Button>
                                </form>
                            </StyledPaper>
                        </Grid>

                        {/* Progress Tracking */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Progress Tracking
                                </Typography>
                                <List>
                                    {carePlans.map((plan) => (
                                        <ListItem style={{marginLeft:'-12%'}} key={plan.id}>
                                            <ListItemIcon style={{minWidth:"12%"}}>
                                                <CheckCircleIcon color="secondary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={plan.patient}
                                                secondary={`Progress: ${plan.progress}`}
                                            />
                                            <ListItemSecondaryAction>
                                                <TextField
                                                    label="Update Progress"
                                                    value={plan.progress}
                                                    onChange={(e) => handleUpdatePlan(plan.id, e.target.value)}
                                                    size="small"
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Communication Tools */}
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                Communication Tools
                            </Typography>
                        </Grid>

                        {/* Messaging */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Messaging
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <MessageIcon color="primary" sx={{ mr: 2 }} />
                                    <TextField fullWidth label="Send Message" margin="normal" />
                                    <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                                        Send
                                    </Button>
                                </Box>
                            </StyledPaper>
                        </Grid>

                        {/* Announcements */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Announcements
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <AnnouncementIcon color="secondary" sx={{ mr: 2 }} />
                                    <TextField fullWidth label="Post Announcement" margin="normal" />
                                    <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
                                        Post
                                    </Button>
                                </Box>
                            </StyledPaper>
                        </Grid>

                        {/* Notifications */}
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Notifications
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <NotificationsIcon sx={{ color: '#ff9800', mr: 2 }} />
                                    <TextField fullWidth label="Send Notification" margin="normal" />
                                    <Button variant="contained" sx={{ ml: 2, backgroundColor: '#ff9800' }}>
                                        Notify
                                    </Button>
                                </Box>
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </Box>
        </ThemeProvider>
    );
};

export default CarePlansOversight;
