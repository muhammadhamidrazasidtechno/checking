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
import "./AgencyContactFilerDetailsForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import DetailsDialog from "../../../_metronic/layout/components/View";
import UserTable from "../../../_metronic/layout/components/Table";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

// Sample data for users
const users = [
  {
    id: 1,
    filerType: "Individual",
    name: "Alice Johnson",
    phoneNumber: "123-456-7890",
    email: "alice@example.com",
    providerOrAgency: "Health Services",
    informationReceivedDate: "2024-09-30",
    informationReceivedTime: "10:00 AM",
    workerInvolved: "John Doe",
    workerType: "Case Worker",
    role: "Admin",
    date: "2024-09-27",
  },
  {
    id: 2,
    filerType: "Agency",
    name: "Bob Smith",
    phoneNumber: "098-765-4321",
    email: "bob@example.com",
    providerOrAgency: "Community Support",
    informationReceivedDate: "2024-09-29",
    informationReceivedTime: "11:00 AM",
    workerInvolved: "Emily White",
    workerType: "Social Worker",
    role: "Supervisor",
    date: "2024-09-28",
  },
  // Add more entries as needed
];

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewAgencyContactFilerDetailsFormAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Filer Type", user.filerType],
      ["Name", user.name],
      ["Phone Number", user.phoneNumber],
      ["Email", user.email],
      ["Provider/Agency", user.providerOrAgency],
      ["Information Received Date", user.informationReceivedDate],
      ["Information Received Time", user.informationReceivedTime],
      ["Worker Involved", user.workerInvolved],
      ["Worker Type", user.workerType],
      ["Role", user.role],
    ];

    PdfDownloader({
      tableRows,
      heading: "Agency Contact Filer Details Form",
      saveName: `AgencyContactFilerDetailsForm_form_details`,
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
      <h1 className="h2mane">Agency Contact Filer Details Form All Forms</h1>
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
        heading="Agency Contact Filer Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAgencyContactFilerDetailsFormAllForm;
