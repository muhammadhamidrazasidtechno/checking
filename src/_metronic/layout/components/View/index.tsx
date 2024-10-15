import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Box,
} from "@mui/material";

// Define the type for the complaint object
interface Complaint {
  [key: string]: any; // This allows any key with any value
}

interface ComplaintDetailsDialogProps {
  open: boolean;
  handleClose: () => void;
  complaint: Complaint | null; // The complaint can be null when no complaint is selected
  heading: string;
}

const DetailsDialog: React.FC<ComplaintDetailsDialogProps> = ({
  open,
  handleClose,
  complaint,
  heading,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        style={{
          background: "linear-gradient(90deg, #3FCF51, #287A20)",
          color: "white",
          textAlign: "center",
        }}
      >
        {heading}
      </DialogTitle>
      <DialogContent className="DialogContent-main">
        {complaint && (
          <Box>
            <Box
              style={{
                background: "linear-gradient(90deg, #EA3400, #FF9805)",
                height: 2,
                marginBottom: 16,
              }}
            />
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {Object.entries(complaint).map(([key, value], index) => {
                    if (Array.isArray(value)) {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <strong>
                              {key.replace(/([A-Z])/g, " $1") + ":"}
                            </strong>
                          </TableCell>
                          <TableCell>
                            {value.map((item, itemIndex) => (
                              <div key={itemIndex}>{item}</div>
                            ))}
                          </TableCell>
                        </TableRow>
                      );
                    }

                    if (typeof value === "object" && value !== null) {
                      return (
                        <TableRow key={index}>
                          <TableCell>
                            <strong>
                              {key.replace(/([A-Z])/g, " $1") + ":"}
                            </strong>
                          </TableCell>
                          <TableCell>
                            {Object.entries(value).map(([subKey, subValue]) => (
                              <div key={subKey}>
                                {subKey.replace(/([A-Z])/g, " $1")}:{" "}
                                {subValue ? "Yes" : "No"}
                              </div>
                            ))}
                          </TableCell>
                        </TableRow>
                      );
                    }

                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <strong>
                            {key.replace(/([A-Z])/g, " $1") + ":"}
                          </strong>
                        </TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
