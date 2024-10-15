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
import "./ReportableEventInformationForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

// Sample data for users
const users = [
  {
    id: 1,
    name: "Raza",
    shortDescriptionOfEvent: "Incident at workplace",
    reporterName: "Alice Johnson",
    workTelephone: "123-456-7890",
    reporterType: "Employee",
    reporterRole: "Manager",
    methodOfReporting: "Email",
    filerType: "Individual",
    date: "2024-09-30",
  },
  {
    id: 2,
    name: "Hamid",

    shortDescriptionOfEvent: "Safety protocol violation",
    reporterName: "Bob Smith",
    workTelephone: "098-765-4321",
    reporterType: "Contractor",
    reporterRole: "Supervisor",
    methodOfReporting: "Phone",
    filerType: "Agency",
    date: "2024-09-29",
  },
  // Add more entries as needed
];

const ViewReportableEventInformationFormAllForm: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Short Description of Event", user.shortDescriptionOfEvent],
      ["Reporter Name", user.reporterName],
      ["Work Telephone", user.workTelephone],
      ["Reporter Type", user.reporterType],
      ["Reporter Role", user.reporterRole],
      ["Method of Reporting", user.methodOfReporting],
      ["Filer Type", user.filerType],
      ["Date", user.date],
    ];
    PdfDownloader({
      tableRows,
      heading: "Reportable Event Information Form Details",
      saveName: `ReportableEventInformationForm_form_details`,
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
      <h1 className="h2mane">Reportable Event Information Form All Forms</h1>
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
        heading="Reportable Event Information Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewReportableEventInformationFormAllForm;
