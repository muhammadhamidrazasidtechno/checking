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
import "./ClientDailySupportPlanLog.css";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";

type ADLs = {
  [key: string]: string; // Key-value pairs for ADLs
};

interface LogEntry {
  date: string;
  name: string;
  id: number;
  personName: string;
  programName: string;
  adls: ADLs;
  completedBy: string;
  staffName: string;
  initial: string;
  refusal: boolean;
  refusalReason: string;
  supervisorName: string;
  signatureDate: string;
}

// Sample data
const logs: LogEntry[] = [
  {
    date: "2024-09-28",
    name: "Ali",
    id: 1,
    personName: "John Doe",
    programName: "Support Program A",
    adls: {
      "Bathing/Showering": "Yes",
      Toileting: "No",
      "Brushing Teeth": "Yes",
    },
    completedBy: "Jane Smith",
    staffName: "Mike Johnson",
    initial: "JS",
    refusal: true,
    refusalReason: "Was tired",
    supervisorName: "Anna Brown",
    signatureDate: "2024-09-01",
  },
  // Add more log entries as needed
];

const ViewClientDailySupportPlanLogs: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(logs.length / USERS_PER_PAGE);
  const handleDownload = (log: any) => {
    const tableRows: [string, string][] = [
      ["Person's Name", log.personName],
      ["Date", log.date],
      ["Program Name", log.programName],
      ...Object.entries(log.adls).map(([key, value]): [any, any] => [
        key,
        value,
      ]),
      ["Completed By", log.completedBy],
      ["Staff Name", log.staffName],
      ["Initial", log.initial],
      ["Refusal", log.refusal ? "Yes" : "No"],
      ["Refusal Reason", log.refusal ? log.refusalReason : "N/A"],
      ["Supervisor Name", log.supervisorName],
      ["Signature and Date", log.signatureDate],
    ];

    PdfDownloader({
      tableRows,
      heading: "Client Daily Support Plan Log",
      saveName: "ClientDailySupportPlanLog",
    });
  };

  const handleView = (log: any) => {
    setSelectedLog(log);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLog(null);
  };

  return (
    <Container>
      <h1 className="h2mane">Client Daily Support Plan Logs</h1>
      <span className="greenLine"></span>
      <UserTable
        users={logs}
        handleView={handleView}
        handleDownload={handleDownload}
      />

      <DetailsDialog
        open={open} // Control the dialog with the state
        handleClose={handleClose} // Properly close the dialog
        complaint={selectedLog} // Pass the selected complaint,
        heading="Client Daily Support Plan Logs Details"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewClientDailySupportPlanLogs;
