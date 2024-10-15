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
import "./FacilityComplaintForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

const complaints = [
  {
    descriptionOfIncident: "ok ho gaya bus ab choro",
    id: 1,
    date: "2024-09-27",
    name: "Ali",
    sNo: 1,
    dateOfIncident: "2024-09-27",
    timeOfIncident: "14:30",
    addressLine1: "520 White Nobel Boulevard",
    addressLine2: "Apt 101",
    city: "Portland",
    state: "Maine",
    zip: "04101",
    incidentLocation: "Residential Care",
    complaintDetails: "Water leak in the bathroom.",
  },
  {
    descriptionOfIncident: "ok ho gaya bus ab choro",
    date: "2024-09-28",
    name: "August Bailey",
    id: 2,
    sNo: 2,
    dateOfIncident: "2024-09-28",
    timeOfIncident: "14:50",
    addressLine1: "720 Green Lane",
    addressLine2: "",
    city: "Augusta",
    state: "Maine",
    zip: "04330",
    incidentLocation: "Nursing Home",
    complaintDetails: "Power outage experienced.",
  },
  // Add more complaints as needed
];
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow
const ViewAllFacilityComplaintForm: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(complaints.length / USERS_PER_PAGE);
  const handleDownload = (complaint: any) => {
    const tableRows: TableRows = [
      ["S.No", complaint.sNo],
      ["Date of Incident", complaint.dateOfIncident],
      ["Time of Incident", complaint.timeOfIncident],
      ["Describe the incident", complaint.descriptionOfIncident],
      ["Address Line 1", complaint.addressLine1],
      ["Address Line 2", complaint.addressLine2],
      ["City", complaint.city],
      ["State", complaint.state],
      ["Zip", complaint.zip],
      ["Incident Location", complaint.incidentLocation],
      ["Complaint Details", complaint.complaintDetails],
    ];

    PdfDownloader({
      tableRows,
      heading: "Incident Details",
      saveName: `Incident`,
    });
  };

  const handleView = (complaint: any) => {
    setSelectedComplaint(complaint);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedComplaint(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Incident Details</h1>
      <span className="greenLine"></span>
      <UserTable
        users={complaints}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedComplaint} // Pass the selected complaint,
        heading="Incident Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllFacilityComplaintForm;
