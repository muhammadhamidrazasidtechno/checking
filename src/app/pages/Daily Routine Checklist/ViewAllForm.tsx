import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";
// import './FacilityComplaintForm.css';

// Sample data
// Sample data
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const sampleComplaints = [
  {
    sNo: 1,
    date: "2024-09-29",
    name: "Ahmed",
    program: "Health Program",
    supervisor: "John Doe",
    tasks: {
      monday: "Task 1",
      tuesday: "Task 2",
      wednesday: "Task 3",
      thursday: "Task 4",
      friday: "Task 5",
    },
  },
  {
    sNo: 2,
    date: "2024-09-28",
    name: "Ali",
    program: "Wellness Program",
    supervisor: "Jane Smith",
    tasks: {
      monday: "Task 6",
      tuesday: "Task 7",
      wednesday: "Task 8",
      thursday: "Task 9",
      friday: "Task 10",
    },
  },
  // Additional sample complaints can be added here...
];

const ViewAllDailyRoutineChecklist: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(sampleComplaints.length / USERS_PER_PAGE);
  // Update the handleDownload and handleView functions to accommodate the new structure as necessary
  const handleDownload = (complaint: any) => {
    const tableRows: TableRows = [
      ["Program", complaint.program],
      ["Supervisor", complaint.supervisor],
      ["Monday", complaint.tasks.monday],
      ["Tuesday", complaint.tasks.tuesday],
      ["Wednesday", complaint.tasks.wednesday],
      ["Thursday", complaint.tasks.thursday],
      ["Friday", complaint.tasks.friday],
    ];

    PdfDownloader({
      tableRows,
      heading: "Daily Routine Checklist",
      saveName: `${complaint.program}_Daily_Routine_Checklist`,
    });
  };

  const handleView = (complaint: any) => {
    setSelectedComplaint(complaint);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedComplaint(null);
  };

  return (
    <Container>
      <h1 className="h2mane">View All Daily Routine Checklist</h1>
      <span className="greenLine"></span>
      <UserTable
        users={sampleComplaints}
        handleView={handleView}
        handleDownload={handleDownload}
      />
      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedComplaint} // Pass the selected complaint,
        heading="Daily Routine Checklist Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllDailyRoutineChecklist;
