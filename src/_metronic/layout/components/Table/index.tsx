import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

interface User {
  name: string;
  date: string;
}

interface UserTableProps {
  users: User[];
  handleView: (user: User) => void;
  handleDownload: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  handleView,
  handleDownload,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index + 1}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.date}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    backgroundImage:
                      "linear-gradient(267deg, #EA3400 0%, #FF9805 100%)",
                    color: "white",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(236deg, #3FCF51 0%, #287A20 78%)",
                    },
                    marginRight: 2,
                  }}
                  onClick={() => handleView(user)}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "transparent",
                    backgroundImage:
                      "linear-gradient(267deg, #EA3400 0%, #FF9805 100%)",
                    color: "white",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(236deg, #3FCF51 0%, #287A20 78%)",
                    },
                  }}
                  onClick={() => handleDownload(user)}
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
