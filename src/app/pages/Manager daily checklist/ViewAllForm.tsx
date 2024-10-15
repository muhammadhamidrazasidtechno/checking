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
  Typography,
  Box,
} from "@mui/material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./ManagerDailyChecklist.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import DetailsDialog from "../../../_metronic/layout/components/View";
import UserTable from "../../../_metronic/layout/components/Table";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const checklists = [
  {
    name: "Muhammad",

    id: 1,
    date: "2024-09-27",
    supervisorSignature: "John Doe",
  },
  {
    name: "Raza",

    id: 2,
    date: "2024-09-28",
    supervisorSignature: "Jane Smith",
  },
  {
    name: "Mustafa",

    id: 3,
    date: "2024-09-29",
    supervisorSignature: "Alice Johnson",
  },
  {
    name: "Hamid",

    id: 4,
    date: "2024-09-30",
    supervisorSignature: "Bob Brown",
  },
  {
    name: "Ahmed",

    id: 5,
    date: "2024-10-01",
    supervisorSignature: "Charlie White",
  },
];

const ViewManagerChecklistForm: React.FC = () => {
  const [selectedChecklist, setSelectedChecklist] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(checklists.length / USERS_PER_PAGE);
  const handleDownload = (checklist: any) => {
    const tableRows: TableRows = [
      ["Date", checklist.date],
      ["Supervisor Signature", checklist.supervisorSignature],
    ];
    PdfDownloader({
      tableRows,
      heading: "Contact Form Details",
      saveName: `manager_daily_checklist`,
    });
  };

  const handleView = (checklist: any) => {
    setSelectedChecklist(checklist);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedChecklist(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Manager Daily Checklists</h1>
      <span className="greenLine"></span>
      <UserTable
        users={checklists}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedChecklist} // Pass the selected complaint,
        heading="Manager Daily Checklists Details"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewManagerChecklistForm;
