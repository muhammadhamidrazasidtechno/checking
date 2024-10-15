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
import "./PersonActivityLog.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

const users = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-09-25",
    program: "Wellness Program",
    activityDescription: "Group exercise session",
    completed: true,
    timeSpent: "1 hour",
    staffName: "Alice Smith",
    planned: true,
    unplanned: false,
    refused: false,
    refusalReason: "",
    supervisorName: "Bob Johnson",
    signatureDate: "2024-09-25",
  },
  // Add more entries as needed
];
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewPersonActivityLogAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Name", user.name],
      ["Date", user.date],
      ["Program", user.program],
      ["Activity Description", user.activityDescription],
      ["Completed?", user.completed ? "Yes" : "No"],
      ["Time Spent", user.timeSpent],
      ["Staff Name", user.staffName],
      ["Planned?", user.planned ? "Yes" : "No"],
      ["Unplanned?", user.unplanned ? "Yes" : "No"],
      ["Refused?", user.refused ? "Yes" : "No"],
      ["Refusal Reason", user.refusalReason || "N/A"],
      ["Supervisor Name", user.supervisorName],
      ["Signature and Date", user.signatureDate],
    ];
    PdfDownloader({
      tableRows,
      heading: "Person Activity Log Details",
      saveName: `PersonActivityLog_form_details`,
    });
  };

  const handleView = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Person Activity Log All Forms</h1>
      <span className="greenLine"></span>
      <UserTable
        users={users}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedUser} // Pass the selected complaint,
        heading="Person Activity Log Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewPersonActivityLogAllForm;
