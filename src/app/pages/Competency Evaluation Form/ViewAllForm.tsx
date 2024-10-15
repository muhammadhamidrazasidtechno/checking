import React, { useEffect, useState } from "react";
import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { getUsers } from "../../modules/apps/user-management/users-list/core/apiRequests";
import UserTable from "../../../_metronic/layout/components/Table";
import DetailsDialog from "../../../_metronic/layout/components/View";
import Pagination from "../../modules/apps/user-management/users-list/components/pagination/Pagination";
import PdfDownloader from "../../../_metronic/layout/components/pdfDownloader";

const USERS_PER_PAGE = 5;

type TableRow = [string, string]; // Tuple of two strings
type TableRows = TableRow[]; // Array of TableRow

const ViewCompetencyEvaluationAllForm: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0); // State for total items

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const query = `CompetencyEvaluationFormRouter/get?page=${currentPage}&limit=${USERS_PER_PAGE}`;
        const response = await getUsers(query);

        // Extract users and total items from the response
        setUsers(response.data.data);
        setTotalItems(response.data.totalItems); // Update total items
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleDownload = (user: any) => {
    const tableRows: TableRows = [
      ["Name", user.name || "N/A"], // Use default value if name is undefined
      ["Date", user.date || "N/A"],
      ["Competency Rating", user.competencyRating || "N/A"],
      ["Comments", user.comments || "N/A"],
    ];

    PdfDownloader({
      tableRows,
      heading: "Competency Evaluation",
      saveName: `Competency_Evaluation`,
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

  const totalPages = Math.ceil(totalItems / USERS_PER_PAGE); // Calculate total pages

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h1 className="h2mane">Competency Evaluation All Form</h1>
      <span className="greenLine"></span>
      <UserTable
        users={users}
        handleView={handleView}
        handleDownload={handleDownload}
      />
      <DetailsDialog
        open={open}
        handleClose={handleClose}
        complaint={selectedUser}
        heading="Competency Evaluation Form Details"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ViewCompetencyEvaluationAllForm;
