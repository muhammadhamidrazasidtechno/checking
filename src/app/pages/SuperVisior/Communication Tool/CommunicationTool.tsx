// src/pages/CommunicationTools.tsx

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
    Toolbar,
    AppBar
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

const CommunicationTools: React.FC = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John Doe', content: 'Can we reschedule the meeting?' },
        { id: 2, sender: 'Jane Smith', content: 'I have completed my task.' },
    ]);

    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'Team Meeting', content: 'There will be a team meeting tomorrow at 10 AM.' },
    ]);

    const [notifications, setNotifications] = useState([
        { id: 1, content: 'Your shift has been updated.' },
        { id: 2, content: 'New task assigned.' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [newAnnouncement, setNewAnnouncement] = useState('');

    const handleSendMessage = () => {
        setMessages([...messages, { id: messages.length + 1, sender: 'You', content: newMessage }]);
        setNewMessage('');
    };

    const handlePostAnnouncement = () => {
        setAnnouncements([...announcements, { id: announcements.length + 1, title: 'New Announcement', content: newAnnouncement }]);
        setNewAnnouncement('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Communication Tools
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Messaging
                                </Typography>
                                <List>
                                    {messages.map((message) => (
                                        <ListItem key={message.id}>
                                            <ListItemText
                                                primary={message.sender}
                                                secondary={message.content}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <TextField
                                    label="New Message"
                                    fullWidth
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSendMessage}
                                    sx={{ marginTop: '16px' }}
                                >
                                    Send
                                </Button>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Announcements
                                </Typography>
                                <List>
                                    {announcements.map((announcement) => (
                                        <ListItem key={announcement.id}>
                                            <ListItemText
                                                primary={announcement.title}
                                                secondary={announcement.content}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <TextField
                                    label="New Announcement"
                                    fullWidth
                                    value={newAnnouncement}
                                    onChange={(e) => setNewAnnouncement(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handlePostAnnouncement}
                                    sx={{ marginTop: '16px' }}
                                >
                                    Post
                                </Button>
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Notifications
                                </Typography>
                                <List>
                                    {notifications.map((notification) => (
                                        <ListItem key={notification.id}>
                                            <ListItemText
                                                primary={notification.content}
                                            />
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

export default CommunicationTools;