import { useAdmins } from "../hooks";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Pagination from "../components/pagination";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [newAdminData, setNewAdminData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const {
    admins,
    handleAdminDelete,
    handleCreateAdmin,
    currentPage,
    changePage,
    totalPages,
    loading,
  } = useAdmins(searchQuery);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAdminData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddAdmin = async (event) => {
    event.preventDefault();
    await handleCreateAdmin(newAdminData);
    setIsAddAdminModalOpen(false);
  };

  useEffect(() => {
    changePage(1); // Reset page on search query change
  }, [searchQuery]);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Button
        color="primary"
        variant="contained"
        sx={{ marginBlock: "1.5rem" }}
        onClick={() => setIsAddAdminModalOpen(true)}
      >
        <AddIcon /> Add Admin
      </Button>

      <Modal
        open={isAddAdminModalOpen}
        onClose={() => setIsAddAdminModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleAddAdmin}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ textAlign: "center", fontSize: "1.5em" }}
            >
              Create a New Admin
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[
                "firstname",
                "lastname",
                "email",
                "phonenumber",
                "password",
                "confirmPassword",
              ].map((field) => (
                <TextField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={field.includes("password") ? "password" : "text"}
                  value={newAdminData[field]}
                  onChange={handleChange}
                  sx={{ marginBottom: "1rem" }}
                  required
                />
              ))}
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  alignSelf: "center",
                  marginTop: "1rem",
                  padding: ".5rem 3rem",
                }}
              >
                Add Admin
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      <TextField
        label="Search Admins"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />

      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <CircularProgress />
        </Box>
      ) : admins.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ marginTop: "2rem" }}>
          No admins found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  key={admin._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {`${admin.firstname} ${admin.lastname}`}
                  </TableCell>
                  <TableCell align="right">{admin.email}</TableCell>
                  <TableCell align="right">{admin.phonenumber}</TableCell>
                  <TableCell align="right">{admin.type}</TableCell>
                  <TableCell align="right">{admin._id}</TableCell>
                  <TableCell align="right">
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleAdminDelete(admin._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            paginatedItem={{
              currentPage,
              lastPage: totalPages,
            }}
            changePage={changePage}
            disablePagination={loading}
          />
        </TableContainer>
      )}
    </Box>
  );
};

export default Page;
