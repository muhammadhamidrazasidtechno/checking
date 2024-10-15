import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { mkConfig, generateCsv, download } from "export-to-csv";
import ClearIcon from "@mui/icons-material/Clear";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => (
  <Snackbar open={Boolean(message)} autoHideDuration={6000} onClose={onClose}>
    <Alert onClose={onClose} severity="warning">
      {message}
    </Alert>
  </Snackbar>
);

export { Notification };
// Dummy data for demonstration
const initialAppointments = [
  { id: 1, patient: "John Doe", date: "2024-09-15", medicationStock: 5 },
  { id: 2, patient: "Jane Smith", date: "2024-09-16", medicationStock: 2 },
  { id: 3, patient: "Emily Johnson", date: "2024-09-17", medicationStock: 10 },
];

const DoctorAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(
    null
  );
  const [newStock, setNewStock] = useState<number | string | "">("");
  const [notification, setNotification] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);

  const handleMarkComplete = (id: number) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              medicationStock: Math.max(appointment.medicationStock - 1, 0),
            }
          : appointment
      )
    );
    checkMedicationStock();
  };

  const handleUpdateStock = () => {
    if (selectedAppointment !== null && newStock !== "") {
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === selectedAppointment
            ? { ...appointment, medicationStock: Number(newStock) }
            : appointment
        )
      );
      setNewStock("");
      setSelectedAppointment(null);
      checkMedicationStock();
    }
  };

  const checkMedicationStock = () => {
    const lowStockAppointments = appointments.filter(
      (appointment) => appointment.medicationStock <= 2
    );
    if (lowStockAppointments.length > 0) {
      setNotification("Medication stock is low. Please notify the supervisor.");
    } else {
      setNotification(null);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(
        appointments.filter((appointment) =>
          appointment.patient.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleExport = () => {
    const csvConfig = mkConfig({
      useKeysAsHeaders: true,
      filename: "appointments",
    });

    const csvData = generateCsv(csvConfig)(
      filteredAppointments.map((app) => ({
        Patient: app.patient,
        Date: app.date,
        "Medication Stock": app.medicationStock,
      }))
    );

    download(csvConfig)(csvData);
  };

  const columns: GridColDef[] = [
    { field: "patient", headerName: "Patient", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "medicationStock", headerName: "Medication Stock", width: 180 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => handleMarkComplete(params.row.id)}
          disabled={params.row.medicationStock <= 0}
        >
          Mark as Complete
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Doctor Appointments
          </Typography>
          <TextField
            label="Search by Patient"
            variant="outlined"
            value={search}
            onChange={handleSearch}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton edge="end" onClick={() => setSearch("")}>
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={filteredAppointments.map((app) => ({
                id: app.id,
                patient: app.patient,
                date: app.date,
                medicationStock: app.medicationStock,
              }))}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
              }}
              pageSizeOptions={[5, 10, 20]} // Optional: if you want page size options
              autoHeight
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleExport}
            style={{ marginTop: 20 }}
          >
            Export to CSV
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Manage Medication Stock
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Appointment</InputLabel>
            <Select
              value={selectedAppointment || ""}
              onChange={(e) => setSelectedAppointment(Number(e.target.value))}
            >
              <MenuItem value="">None</MenuItem>
              {appointments.map((appointment) => (
                <MenuItem key={appointment.id} value={appointment.id}>
                  {appointment.patient} - {appointment.date}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="New Medication Stock"
            type="number"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateStock}
            disabled={selectedAppointment === null || newStock === ""}
            style={{ marginTop: 10 }}
          >
            Update Stock
          </Button>
          {notification && (
            <Notification
              message={notification}
              onClose={() => setNotification(null)}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorAppointmentsPage;
