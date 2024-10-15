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
import "./EmployeePerformanceReviewForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[];

const nominations = [
  {
    id: 1,
    employeeName: "John Doe",
    position: "Software Engineer",
    department: "Development",
    date: "2024-09-20",
    finalValue: "4.5",
    criteria: [
      "4",
      "5",
      "4",
      "4",
      "5",
      "5",
      "4",
      "5",
      "5",
      "4",
      "5",
      "5",
      "5",
      "4",
      "5",
      "5",
    ],
    employeeComments: "Great performance this quarter.",
    directSuperiorComments: "Exceeds expectations in teamwork.",
    hrdComments: "Consistently high productivity.",
    employeeSignature: "John Doe",
    superiorSignature: "Jane Smith",
    hrdSignature: "Michael Johnson",
    sNo: 1,
    name: "Muhammad",
  },
  // Add more entries as needed
];

const ViewAllEmployeePerformanceReviewForm: React.FC = () => {
  const [selectedNomination, setSelectedNomination] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(nominations.length / USERS_PER_PAGE);

  const handleDownload = (nomination: any) => {
    // Define table columns and rows with additional fields
    const tableRows: TableRows = [
      ["Employee Name", nomination.employeeName],
      ["Position", nomination.position],
      ["Department", nomination.department],
      ["Date", nomination.date],
      ["Final Value", nomination.finalValue],
      ["Criteria", nomination.criteria],
      ["Employee Comments", nomination.employeeComments],
      ["Direct Superior Comments", nomination.directSuperiorComments],
      ["HRD Comments", nomination.hrdComments],
      ["Employee Signature", nomination.employeeSignature],
      ["Superior Signature", nomination.superiorSignature],
      ["HRD Signature", nomination.hrdSignature],
    ];

    PdfDownloader({
      tableRows,
      heading: "Nomination Details",
      saveName: `nomination_details`,
    });
  };

  // Save the PDF

  const handleView = (nomination: any) => {
    setSelectedNomination(nomination);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNomination(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Nominations</h1>
      <span className="greenLine"></span>
      <UserTable
        users={nominations}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedNomination} // Pass the selected complaint,
        heading="Nomination Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllEmployeePerformanceReviewForm;
