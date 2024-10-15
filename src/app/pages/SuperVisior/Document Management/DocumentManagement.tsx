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
    IconButton,
    ListItemSecondaryAction,
    ListItemIcon,
    AppBar,
    Toolbar,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AlarmIcon from '@mui/icons-material/Alarm';

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

const DocumentManagement: React.FC = () => {
    const [hrDocs, setHrDocs] = useState([
        { id: 1, name: 'HR Policy 2023', link: '#', expiration: '2023-12-31' },
        { id: 2, name: 'Supervisor Guidelines', link: '#', expiration: '2024-01-15' },
    ]);

    const [teamDocs, setTeamDocs] = useState([
        { id: 3, name: 'Team Meeting Notes', link: '#', expiration: '2023-11-30' },
        { id: 4, name: 'Project Plan', link: '#', expiration: '2023-12-15' },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Document Management
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    HR Documents
                                </Typography>
                                <List>
                                    {hrDocs.map((doc) => (
                                        <ListItem key={doc.id} component="a" href={doc.link}>
                                            <ListItemIcon>
                                                <FileCopyIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={doc.name} />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" color="error">
                                                    Exp: {doc.expiration}
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Team Documentation
                                </Typography>
                                <List>
                                    {teamDocs.map((doc) => (
                                        <ListItem key={doc.id} component="a" href={doc.link}>
                                            <ListItemIcon>
                                                <FileCopyIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={doc.name} />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" color="error">
                                                    Exp: {doc.expiration}
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Expiration Monitoring
                                </Typography>
                                <List>
                                    {[...hrDocs, ...teamDocs].map((doc) => (
                                        <ListItem key={doc.id} component="a" href={doc.link}>
                                            <ListItemIcon>
                                                <AlarmIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={doc.name} />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" color="error">
                                                    Exp: {doc.expiration}
                                                </Typography>
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

export default DocumentManagement;
