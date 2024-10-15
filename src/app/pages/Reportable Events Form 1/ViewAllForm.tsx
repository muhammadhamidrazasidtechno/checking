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
import "./ReportableEventsForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

// Sample data
const reports = [
  {
    id: 1,
    eventType: "Dangerous Situation",
    clientFirstName: "John",
    clientLastName: "Doe",
    dateOfBirth: "1990-01-01",
    date: "2024-09-29",
    name: "Ahmed",
  },
  {
    date: "2024-09-28",
    name: "Ali",
    id: 2,
    eventType: "Emergency Department Visit",
    clientFirstName: "Jane",
    clientLastName: "Smith",
    dateOfBirth: "1985-05-15",
  },
  // Add more entries as needed
];

const ViewReportableEvents: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(reports.length / USERS_PER_PAGE);
  const handleDownload = (report: any) => {
    const tableRows: TableRows = [
      ["Event Type", report.eventType],
      ["Client First Name", report.clientFirstName],
      ["Client Last Name", report.clientLastName],
      ["Date of Birth", report.dateOfBirth],
    ];

    PdfDownloader({
      tableRows,
      heading: "Reportable Event",
      saveName: `ReportableEvent_form_details`,
    });
  };

  const handleView = (report: any) => {
    setSelectedReport(report);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReport(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Reportable Events - All Forms</h1>
      <span className="greenLine"></span>
      <UserTable
        users={reports}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedReport} // Pass the selected complaint,
        heading="Reportable Events Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewReportableEvents;
