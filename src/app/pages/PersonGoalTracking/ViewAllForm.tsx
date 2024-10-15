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
import "./PersonGoalTracking.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const goals = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-09-25",
    program: "Wellness Program",
    scheduledGoal: "30 minutes of cardio",
    completed: true,
    feedback: "Felt great!",
    alternativeOffered: false,
    alternativeDetails: "",
    explanation: "",
    supervisor: "Alice Smith",
  },
  // Add more entries as needed
];

const ViewPersonGoalTracking: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(goals.length / USERS_PER_PAGE);
  const handleDownload = (goal: any) => {
    const tableRows: TableRows = [
      ["Name", goal.name],
      ["Date", goal.date],
      ["Program Name", goal.program],
      ["Goal Scheduled", goal.scheduledGoal],
      ["Goal Completed?", goal.completed ? "Yes" : "No"],
      ["Feedback", goal.feedback || "N/A"],
      ["Alternative Offered?", goal.alternativeOffered ? "Yes" : "No"],
      ["Alternative Details", goal.alternativeDetails || "N/A"],
      ["Explanation", goal.explanation || "N/A"],
      ["Supervisor Name", goal.supervisor],
    ];

    PdfDownloader({
      tableRows,
      heading: "Person Goal Tracking",
      saveName: `PersonGoalTracking_form_details`,
    });
  };

  const handleView = (goal: any) => {
    setSelectedGoal(goal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedGoal(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Person Goal Tracking All Forms</h1>
      <span className="greenLine"></span>
      <UserTable
        users={goals}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedGoal} // Pass the selected complaint,
        heading="Person Goal Tracking Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewPersonGoalTracking;
