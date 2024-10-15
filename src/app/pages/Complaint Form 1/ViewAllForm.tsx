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
import "./ContactForm.css";
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
    date: "2024-09-27",
    name: "August Bailey",
    phoneNumber: "+1 (376) 619-1123",
    emailAddress: "cadecegak@mailinator.com",
    relationship: "Consequat Non eos r",
    facilityName: "Brady Gilbert",
    facilityAddress1: "520 White Nobel Boulevard",
    facilityAddress2: "Apt 101",
  },
  {
    id: 2,
    sNo: 2,
    date: "2024-09-28",
    name: "Ali",
    phoneNumber: "+1 (376) 619-1123",
    emailAddress: "cadecegak@mailinator.com",
    relationship: "Consequat Non eos r",
    facilityName: "Brady Gilbert",
    facilityAddress1: "520 White Nobel Boulevard",
    facilityAddress2: "Apt 101",
  },
  {
    id: 3,
    sNo: 3,
    date: "2024-09-29",
    name: "Ahmed",
    phoneNumber: "+1 (376) 619-1123",
    emailAddress: "cadecegak@mailinator.com",
    relationship: "Consequat Non eos r",
    facilityName: "Brady Gilbert",
    facilityAddress1: "520 White Nobel Boulevard",
    facilityAddress2: "Apt 101",
  },
  {
    id: 4,
    sNo: 4,
    date: "2024-09-30",
    name: "Saad",
    phoneNumber: "+1 (376) 619-1123",
    emailAddress: "cadecegak@mailinator.com",
    relationship: "Consequat Non eos r",
    facilityName: "Brady Gilbert",
    facilityAddress1: "520 White Nobel Boulevard",
    facilityAddress2: "Apt 101",
  },
  {
    id: 5,
    sNo: 5,
    date: "2024-10-01",
    name: "August Bailey",
    phoneNumber: "+1 (376) 619-1123",
    emailAddress: "cadecegak@mailinator.com",
    relationship: "Consequat Non eos r",
    facilityName: "Brady Gilbert",
    facilityAddress1: "520 White Nobel Boulevard",
    facilityAddress2: "Apt 101",
  },
];

const ViewContactAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["S.No", user.sNo],
      ["Date", user.date],
      ["Phone Number", user.phoneNumber],
      ["Email Address", user.emailAddress],
      ["Person Name", user.name],
      ["Relationship", user.relationship],
      ["Facility Name", user.facilityName],
      ["Facility Address", `${user.facilityAddress1} ${user.facilityAddress2}`],
    ];

    PdfDownloader({
      tableRows,
      heading: "Contact Form Details",
      saveName: `contact_form_details`,
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
  const USERS_PER_PAGE = 5;
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / USERS_PER_PAGE);
  return (
    <Container>
      <h1 className="h2mane">Contact All Forms</h1>
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
        heading="Contact Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewContactAllForm;
