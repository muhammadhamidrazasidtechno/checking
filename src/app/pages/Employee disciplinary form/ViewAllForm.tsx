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
import "./DisciplinaryActionForm.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

const disciplinaryActions = [
  {
    name: "Saad",
    date: "2024-09-27",
    id: 1,
    sNo: 1,
    employeeName: "John Doe",
    disciplinaryAction: "Tardiness",
    detailsOfOccurrence: "Late to work on 09/20/2024",
    dateOfOccurrence: "2024-09-20",
    hasInfractionOccurredBefore: "Yes",
    firstDate: "2024-06-15",
    firstActionTaken: "Verbal Counseling",
    secondDate: "2024-08-05",
    secondActionTaken: "Written Warning",
    thirdDate: "2024-09-01",
    thirdActionTaken: "Final Warning",
    correctiveAction: "Termination",
    actionDetails: "Termination due to repeated infractions.",
    supervisorSignature: "Jane Smith",
    supervisorDate: "2024-09-22",
  },
  {
    name: "August Bailey",
    date: "2024-09-28",

    id: 2,
    sNo: 2,
    employeeName: "Jane Doe",
    disciplinaryAction: "Policy Violation",
    detailsOfOccurrence: "Failure to adhere to company dress code.",
    dateOfOccurrence: "2024-09-12",
    hasInfractionOccurredBefore: "No",
    correctiveAction: "Written Warning",
    actionDetails: "Written warning given for dress code violation.",
    supervisorSignature: "Mark Johnson",
    supervisorDate: "2024-09-13",
  },
  // Add more entries as needed
];
type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewAllDisciplinaryActions: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(disciplinaryActions.length / USERS_PER_PAGE);
  const handleDownload = (action: any) => {
    const tableRows: TableRows = [
      ["Employee Name", action.employeeName],
      ["Disciplinary Action", action.disciplinaryAction],
      ["Details of Occurrence", action.detailsOfOccurrence],
      ["Date of Occurrence", action.dateOfOccurrence],
      ["Has Infraction Occurred Before", action.hasInfractionOccurredBefore],
    ];

    if (action.hasInfractionOccurredBefore === "Yes") {
      tableRows.push(
        ["First Occurrence Date", action.firstDate],
        ["First Action Taken", action.firstActionTaken],
        ["Second Occurrence Date", action.secondDate],
        ["Second Action Taken", action.secondActionTaken],
        ["Third Occurrence Date", action.thirdDate],
        ["Third Action Taken", action.thirdActionTaken]
      );
    }

    tableRows.push(
      ["Corrective Action", action.correctiveAction],
      ["Action Details", action.actionDetails],
      ["Supervisor Signature", action.supervisorSignature],
      ["Supervisor Date", action.supervisorDate]
    );

    PdfDownloader({
      tableRows,
      heading: "Disciplinary Action Details",
      saveName: `disciplinary_action_details`,
    });
  };

  const handleView = (action: any) => {
    setSelectedAction(action);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAction(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Disciplinary Actions</h1>
      <span className="greenLine"></span>
      <UserTable
        users={disciplinaryActions}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedAction} // Pass the selected complaint,
        heading="Disciplinary Actions"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewAllDisciplinaryActions;
