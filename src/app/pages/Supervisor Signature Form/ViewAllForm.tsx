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
import "./SupervisorSignatureForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

// Sample data for users
const users = [
  {
    id: 1,
    sNo: 1,
    date: "2024-09-28",

    name: "Alice Johnson",
    supervisorSignature: "John Doe",
    supervisorDate: "2024-09-30",
    staffSignature: "Emily White",
    staffDate: "2024-09-29",
    employeeSignature: "Bob Smith",
    employeeDate: "2024-09-28",
  },
  {
    date: "2024-09-27",

    id: 2,
    sNo: 2,
    name: "Bob Smith",
    supervisorSignature: "Mary Johnson",
    supervisorDate: "2024-09-29",
    staffSignature: "James Brown",
    staffDate: "2024-09-28",
    employeeSignature: "Alice Johnson",
    employeeDate: "2024-09-27",
  },
  // Add more entries as needed
];
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewSupervisorSignatureFormAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Name", user.name],
      ["Supervisor Signature", user.supervisorSignature],
      ["Supervisor Date", user.supervisorDate],
      ["Staff Signature", user.staffSignature],
      ["Staff Date", user.staffDate],
      ["Employee Signature", user.employeeSignature],
      ["Employee Date", user.employeeDate],
    ];
    PdfDownloader({
      tableRows,
      heading: "Supervisor Signature Form Details",
      saveName: `SupervisorSignatureForm_form_details`,
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
      <h1 className="h2mane">Supervisor Signature Form All Forms</h1>
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
        heading="Supervisor Signature Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewSupervisorSignatureFormAllForm;
