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
import "./DetailedReportForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

// Sample data for users
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    dateOfBirth: "1990-01-01",
    eventStartDate: "2024-09-25",
    eventEndDate: "2024-09-26",
    dateReportedToDHHS: "2024-09-27",
    departmentReportedTo: "Health Services",
    programType: "Community Health",
    eventStartTime: "10:00 AM",
    eventEndTime: "2:00 PM",
    dhhsPersonReportedTo: "John Doe",
    incidentDataSpecialist: "Jane Smith",
    date: "2024-09-30",
  },
  {
    id: 2,
    name: "Bob Smith",
    dateOfBirth: "1985-05-15",
    eventStartDate: "2024-09-28",
    eventEndDate: "2024-09-29",
    dateReportedToDHHS: "2024-09-30",
    departmentReportedTo: "Social Services",
    programType: "Youth Programs",
    eventStartTime: "9:00 AM",
    eventEndTime: "1:00 PM",
    dhhsPersonReportedTo: "Mary Johnson",
    incidentDataSpecialist: "Bob Brown",
    date: "2024-09-30",
  },
  // Add more entries as needed
];

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewDetailedReportFormAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Name", user.name],
      ["Date of Birth", user.dateOfBirth],
      ["Event Start Date", user.eventStartDate],
      ["Event End Date", user.eventEndDate],
      ["Date Reported to DHHS", user.dateReportedToDHHS],
      ["Department Reported To", user.departmentReportedTo],
      ["Program Type", user.programType],
      ["Event Start Time", user.eventStartTime],
      ["Event End Time", user.eventEndTime],
      ["DHHS Person Reported To", user.dhhsPersonReportedTo],
      ["Incident Data Specialist", user.incidentDataSpecialist],
      ["Report Date", user.date],
    ];

    PdfDownloader({
      tableRows,
      heading: "Detailed Report Form Details",
      saveName: `DetailedReportForm_form_details`,
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
      <h1 className="h2mane">Detailed Report Form All Forms</h1>
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
        heading="Detailed Report Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewDetailedReportFormAllForm;
