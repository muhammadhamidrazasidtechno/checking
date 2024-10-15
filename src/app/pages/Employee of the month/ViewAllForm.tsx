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
import "./EmployeeNominationForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

const nominations = [
  {
    id: 1,
    name: "August Bailey",

    sNo: 1,
    employeeName: "John Doe",
    position: "Software Engineer",
    department: "Development",
    nominationReason: "Exceeds performance expectations.",
    nominatorName: "Jane Smith",
    nominatorPhone: "123-456-7890",
    date: "2024-09-20",
  },
  {
    id: 2,
    name: "Saad",

    sNo: 2,
    employeeName: "Jane Doe",
    position: "Project Manager",
    department: "Management",
    nominationReason: "Outstanding leadership and project delivery.",
    nominatorName: "Mark Johnson",
    nominatorPhone: "098-765-4321",
    date: "2024-09-15",
  },
  // Add more entries as needed
];
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewAllNominations: React.FC = () => {
  const [selectedNomination, setSelectedNomination] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(nominations.length / USERS_PER_PAGE);
  const handleDownload = (nomination: any) => {
    const tableRows: TableRows = [
      ["Employee Name", nomination.employeeName],
      ["Position", nomination.position],
      ["Department", nomination.department],
      ["Nomination Reason", nomination.nominationReason],
      ["Nominator Name", nomination.nominatorName],
      ["Nominator Phone", nomination.nominatorPhone],
      ["Date", nomination.date],
    ];

    PdfDownloader({
      tableRows,
      heading: "Nomination Details",
      saveName: `nomination_details`,
    });
  };

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
        heading="Nominations"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllNominations;
