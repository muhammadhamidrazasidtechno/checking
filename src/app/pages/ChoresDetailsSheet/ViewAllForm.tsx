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
import "./ChoresDetailsSheet.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const users = [
  {
    id: 1,
    sNo: 1,
    programName: "Cleaning Program",
    name: "Cleaning Program",
    personName: "John Doe",
    date: "2023-09-01",
    shift: "Morning",
    completedBy: "John Doe",
    staffName: "Alice Smith",
    initial: "JD",
    supervisorName: "Bob Johnson",
    signatureDate: "2023-09-01",
    choresCompleted: [
      "Sweep and Mop kitchen and dining area",
      "Wash bathroom rugs",
    ],
  },
  // Add more user entries as needed
];

const ViewChoresDetailsAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Program Name", user.programName],
      ["Person Name", user.personName],
      ["Date", user.date],
      ["Shift", user.shift],
      ["Completed By", user.completedBy],
      ["Staff Name", user.staffName],
      ["Initial", user.initial],
      ["Supervisor Name", user.supervisorName],
      ["Signature and Date", user.signatureDate],
      ["Chores Completed", user.choresCompleted.join(", ") || "None"],
    ];

    PdfDownloader({
      tableRows,
      heading: "Chores Details Sheet",
      saveName: `${user.personName}_chores_details_sheet.pdf`,
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
      <h1 className="h2mane">Chores Details All Forms</h1>
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
        heading="Chores Details"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewChoresDetailsAllForm;
