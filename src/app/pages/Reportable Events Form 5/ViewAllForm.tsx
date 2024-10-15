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
import "./RoleAndGuardianForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import DetailsDialog from "../../../_metronic/layout/components/View";
import UserTable from "../../../_metronic/layout/components/Table";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

// Sample data for nominations
const nominations = [
  {
    name: "John Doe",

    id: 1,
    sNo: 1,
    role: "Participant",
    anotherPersonInvolved: "Yes",
    guardianNotified: "Yes",
    guardianName: "John Doe",
    phone: "+1 (234) 567-8901",
    address: "123 Main St, City, State, ZIP",
    date: "2024-09-30",
  },
  {
    name: "Doe",
    id: 2,
    sNo: 2,
    role: "Witness",
    anotherPersonInvolved: "No",
    guardianNotified: "No Guardian",
    guardianName: "John",
    phone: "+1 (234) 567-8901",
    address: "123 Main",
    date: "2024-09-29",
  },
  // Add more entries as needed
];

const ViewAllRoleAndGuardianForm: React.FC = () => {
  const [selectedNomination, setSelectedNomination] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(nominations.length / USERS_PER_PAGE);
  const handleDownload = (nomination: any) => {
    // Define table columns and rows with additional fields

    const tableRows: TableRows = [
      ["Role", nomination.role],
      ["Another Person Involved", nomination.anotherPersonInvolved],
      ["Guardian Notified", nomination.guardianNotified],
      ["Guardian Name", nomination.guardianName || "N/A"],
      ["Phone", nomination.phone || "N/A"],
      ["Address", nomination.address || "N/A"],
    ];

    PdfDownloader({
      tableRows,
      heading: "Role And Guardian Form",
      saveName: `RoleAndGuardianForm`,
    });
    // Save the PDF
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
      <h1 className="h2mane">Role And Guardian Forms</h1>
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
        heading="Role And Guardian Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllRoleAndGuardianForm;
