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
import "jspdf-autotable";
import "./ConfidentialityForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import DetailsDialog from "../../../_metronic/layout/components/View";
import UserTable from "../../../_metronic/layout/components/Table";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

interface User {
  id: number;
  sNo: number;
  name: string;
  date: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  confidentialityDesired: string;
}

const users: User[] = [
  {
    id: 1,
    sNo: 1,
    name: "John Doe",
    date: "2024-09-27",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    confidentialityDesired: "Full",
  },
  {
    id: 2,
    sNo: 2,
    name: "Jane Smith",
    date: "2024-09-27",
    addressLine1: "456 Oak St",
    addressLine2: "",
    city: "Lincoln",
    state: "NE",
    zip: "68510",
    confidentialityDesired: "Partial",
  },
  // Add more unique users as needed
];

const ViewAllConfidentialityForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["S.No", user.sNo.toString()],
      ["Date", user.date],
      ["Name", user.name],
      ["Address Line 1", user.addressLine1],
      ["Address Line 2", user.addressLine2],
      ["City", user.city],
      ["State", user.state],
      ["Zip", user.zip],
      ["Confidentiality Desired", user.confidentialityDesired],
    ];

    PdfDownloader({
      tableRows,
      heading: "Confidentiality Form Details",
      saveName: `confidentiality_form_details_${user.sNo}`,
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
      <h1 className="h2mane">Confidentiality All Forms</h1>
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
        heading="Confidentiality Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllConfidentialityForm;
