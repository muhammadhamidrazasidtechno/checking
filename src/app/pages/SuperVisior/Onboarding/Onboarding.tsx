// src/pages/Onboarding.tsx

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
    ListItemSecondaryAction,
    Checkbox,
    FormControlLabel,
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
            default: '#f5f5f5',
        },
    },
    typography: {
        h6: {
            fontWeight: 600,
            color: '#1976d2',
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

const TaskCheckbox = styled(Checkbox)`
    color: ${(props) => (props.checked ? '#1976d2' : '#dc004e')};
`;

const Onboarding: React.FC = () => {
    const [newMembers, setNewMembers] = useState([
        { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com' },
    ]);

    const [tasks, setTasks] = useState([
        { id: 1, task: 'Complete HR paperwork', completed: false },
        { id: 2, task: 'Setup workstation', completed: false },
        { id: 3, task: 'Attend orientation', completed: false },
    ]);

    const handleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default }}>
                <StyledContainer maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* New Team Members */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    New Team Members
                                </Typography>
                                <List>
                                    {newMembers.map((member) => (
                                        <ListItem key={member.id}>
                                            <ListItemText
                                                primary={member.name}
                                                secondary={member.email}
                                                primaryTypographyProps={{ fontWeight: 'bold' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </StyledPaper>
                        </Grid>

                        {/* Task Completion Verification */}
                        <Grid item xs={12} md={6}>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>
                                    Task Completion Verification
                                </Typography>
                                <List>
                                    {tasks.map((task) => (
                                        <ListItem key={task.id}>
                                            <ListItemText
                                                primary={task.task}
                                                primaryTypographyProps={{ fontWeight: 'bold' }}
                                            />
                                            <ListItemSecondaryAction>
                                                <FormControlLabel
                                                    control={
                                                        <TaskCheckbox
                                                            checked={task.completed}
                                                            onChange={() => handleTaskCompletion(task.id)}
                                                        />
                                                    }
                                                    label={task.completed ? 'Completed' : 'Pending'}
                                                />
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

export default Onboarding;
