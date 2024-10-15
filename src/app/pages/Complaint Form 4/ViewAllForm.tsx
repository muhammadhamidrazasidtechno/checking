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
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";
// import './FacilityComplaintForm.css';

// Sample data
// Sample data
const sampleComplaints = [
  {
    sNo: 1,
    name: "Raza",
    date: "2024-09-27",
    id: 1,
    residentStillInFacility: "Yes",
    anyoneElseInvolved: "No",
    anyWitnesses: "No",
    spokenToStaff: "Yes",
    facilityTriedToAddress: "No",
    lawEnforcementInvolved: "Yes",
    happenedBefore: "No",
  },
  {
    sNo: 2,
    name: "Raza",

    date: "2024-09-27",
    id: 1,
    residentStillInFacility: "Yes",
    anyoneElseInvolved: "No",
    anyWitnesses: "No",
    spokenToStaff: "Yes",
    facilityTriedToAddress: "No",
    lawEnforcementInvolved: "Yes",
    happenedBefore: "No",
  },
  {
    name: "Hamid",

    sNo: 3,
    date: "2024-09-27",
    id: 1,
    residentStillInFacility: "Yes",
    anyoneElseInvolved: "No",
    anyWitnesses: "No",
    spokenToStaff: "Yes",
    facilityTriedToAddress: "No",
    lawEnforcementInvolved: "Yes",
    happenedBefore: "No",
  },
  {
    name: "Ahmed",

    sNo: 4,
    date: "2024-09-27",
    id: 1,
    residentStillInFacility: "Yes",
    anyoneElseInvolved: "No",
    anyWitnesses: "No",
    spokenToStaff: "Yes",
    facilityTriedToAddress: "No",
    lawEnforcementInvolved: "Yes",
    happenedBefore: "No",
  },
  {
    name: "Mustafa",

    sNo: 5,
    date: "2024-09-27",
    id: 1,
    residentStillInFacility: "Yes",
    anyoneElseInvolved: "No",
    anyWitnesses: "No",
    spokenToStaff: "Yes",
    facilityTriedToAddress: "No",
    lawEnforcementInvolved: "Yes",
    happenedBefore: "No",
  },
  // Additional sample complaints can be added here...
];

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewAllFacilityComplaints: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(sampleComplaints.length / USERS_PER_PAGE);
  const handleDownload = (complaint: any) => {
    const tableRows: TableRows = [
      ["S.No", complaint.sNo],
      ["Date", complaint.date],
      ["Resident Still in Facility", complaint.residentStillInFacility],
      ["Anyone Else Involved", complaint.anyoneElseInvolved],
      ["Any Witnesses", complaint.anyWitnesses],
      ["Spoken to Staff", complaint.spokenToStaff],
      ["Facility Tried to Address", complaint.facilityTriedToAddress],
      ["Law Enforcement Involved", complaint.lawEnforcementInvolved],
      ["Happened Before", complaint.happenedBefore],
    ];

    PdfDownloader({
      tableRows,
      heading: "Facility Complaints",
      saveName: `complaint_details`,
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
      <h1 className="h2mane">View All Facility Complaints</h1>
      <span className="greenLine"></span>
      <UserTable
        users={sampleComplaints}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedComplaint} // Pass the selected complaint,
        heading="Facility Complaints"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllFacilityComplaints;
