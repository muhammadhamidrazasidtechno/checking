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
import "./MaintenanceRequestForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import DetailsDialog from "../../../_metronic/layout/components/View";
import UserTable from "../../../_metronic/layout/components/Table";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const requests = [
  {
    name: "Muhammad",

    id: 1,
    programName: "Program A",
    address: "123 Main St",
    date: "2024-09-27",
    requestedBy: "Alice",
    brokenItems: {
      lightBulb: true,
      tvRemote: false,
      mattress: false,
      other: false,
    },
    comments: "Need light bulb replaced.",
    priorityLevel: "High",
    receivedBy: "John",
    assignedTo: "Mike",
    completedOn: "",
    signature: "Alice",
    notes: "Urgent request.",
  },
  // Add more sample requests as needed
];

const ViewMaintenanceRequests: React.FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(requests.length / USERS_PER_PAGE);

  const handleDownload = (request: any) => {
    const tableRows: TableRows = [
      ["Program Name", request.programName],
      ["Address", request.address],
      ["Date", request.date],
      ["Requested By", request.requestedBy],
      ["Comments", request.comments],
      ["Priority Level", request.priorityLevel],
      ["Received By", request.receivedBy],
      ["Assigned To", request.assignedTo],
      ["Completed On", request.completedOn || "Not Completed"],
      ["Signature", request.signature],
      ["Notes", request.notes],
    ];

    PdfDownloader({
      tableRows,
      heading: "Maintenance Request Details",
      saveName: `maintenance_request_details`,
    });
  };

  const handleView = (request: any) => {
    setSelectedRequest(request);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRequest(null);
  };

  return (
    <Container>
      <h1 className="h2mane">View All Maintenance Requests</h1>
      <span className="greenLine"></span>
      <UserTable
        users={requests}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedRequest} // Pass the selected complaint,
        heading="Maintenance Requests Details"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewMaintenanceRequests;
