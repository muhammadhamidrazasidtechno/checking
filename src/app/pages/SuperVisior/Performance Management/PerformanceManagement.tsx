import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
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
    padding: 24px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const PerformanceManagementPage: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    const [goal, setGoal] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const teamMembers = [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
    ];

    const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedMember(event.target.value as number);
    };

    const handleSetGoal = () => {
        // Logic to save the goal
        console.log('Set Goal:', goal);
    };

    const handleReviewGoal = () => {
        // Logic to review the goal
        setOpenDialog(true);
    };

    const handleSubmitFeedback = () => {
        // Logic to submit feedback
        console.log('Feedback:', feedback);
        setOpenDialog(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledContainer maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Dropdown to Select Team Member */}
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <Typography variant="h6" gutterBottom>
                                Performance Management
                            </Typography>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="team-member-select-label">Select Team Member</InputLabel>
                                <Select
                                    labelId="team-member-select-label"
                                    id="team-member-select"
                                    onChange={() => handleSelect}
                                    label="Select Team Member"
                                >
                                    {teamMembers.map((member) => (
                                        <MenuItem key={member.id} value={member.id}>
                                            {member.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </StyledPaper>
                    </Grid>

                    {/* Set Goals */}
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <Typography variant="h6" gutterBottom>
                                Set Goals
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Goal"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                multiline
                                rows={4}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSetGoal}
                                sx={{ mt: 2 }}
                            >
                                Set Goal
                            </Button>
                        </StyledPaper>
                    </Grid>

                    {/* Review Goals */}
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <Typography variant="h6" gutterBottom>
                                Review Goals
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleReviewGoal}
                            >
                                Review Goals
                            </Button>
                        </StyledPaper>
                    </Grid>

                    {/* Evaluations */}
                    <Grid item xs={12}>
                        <StyledPaper>
                            <Typography variant="h6" gutterBottom>
                                Performance Evaluations
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                multiline
                                rows={4}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmitFeedback}
                                sx={{ mt: 2 }}
                            >
                                Submit Feedback
                            </Button>
                        </StyledPaper>
                    </Grid>
                </Grid>

                {/* Feedback Dialog */}
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Review Goals</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please provide your feedback on the goals.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="feedback"
                            label="Feedback"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmitFeedback} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default PerformanceManagementPage;
