import React from 'react';
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import './TrainingSchedule.css';

interface TrainingData {
  quarter: string;
  trainingTopic: string;
  mode: string;
  date: string;
  status: string;
  completionStatus: string;
}

const trainingData: TrainingData[] = [
  {
    quarter: 'Q1 (Jan-Apr)',
    trainingTopic: 'Person Centered Plan',
    mode: 'In-person (Office)',
    date: 'January 15, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q1 (Jan-Apr)',
    trainingTopic: 'BCBS and Client Rights',
    mode: 'Virtual (Zoom)',
    date: 'February 10, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q1 (Jan-Apr)',
    trainingTopic: 'Mandated Reporter',
    mode: 'House Meeting',
    date: 'March 5, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Documentation',
    mode: 'Virtual (Zoom)',
    date: 'April 2, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Residential Policy',
    mode: 'House Meeting',
    date: 'April 20, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Autism',
    mode: 'Virtual (Zoom)',
    date: 'February 26, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Person Centered Plan',
    mode: 'Virtual (Zoom)',
    date: 'May 5, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'HCBS and Client Rights',
    mode: 'House Meeting',
    date: 'June 1, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Mandated Reporter',
    mode: 'Virtual (Zoom)',
    date: 'June 20, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q2 (Apr-Aug)',
    trainingTopic: 'Documentations',
    mode: 'In-person (Office)',
    date: 'July 10, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Residential Policy',
    mode: 'Virtual (Zoom)',
    date: 'August 1, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Bipolar Disorder',
    mode: 'Virtual (Zoom)',
    date: 'May 30, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Person Centered Plan',
    mode: 'House Meeting',
    date: 'September 15, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'HCBS and Client Rights',
    mode: 'Virtual (Zoom)',
    date: 'October 5, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Mandated Reporter',
    mode: 'In-person (Office)',
    date: 'November 1, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Documentation',
    mode: 'House Meeting',
    date: 'November 20, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
  {
    quarter: 'Q3 (Aug-Dec)',
    trainingTopic: 'Residential Policy',
    mode: 'Virtual (Zoom)',
    date: 'December 10, 2024',
    status: 'Pending',
    completionStatus: 'Not Completed',
  },
];

const TrainingSchedule: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 4,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          <h2>

          Training Schedule
          </h2>
        </Typography>
        <span className='greenLine'></span>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quarter</TableCell>
                <TableCell>Training Topic</TableCell>
                <TableCell>Mode</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Completion Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainingData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.quarter}</TableCell>
                  <TableCell>{row.trainingTopic}</TableCell>
                  <TableCell>{row.mode}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.completionStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TrainingSchedule;