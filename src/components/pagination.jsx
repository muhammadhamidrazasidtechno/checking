import React from "react";
import { Button, Typography, Stack } from "@mui/material";

const Pagination = ({ paginatedItem, changePage, disablePagination }) => {
  const handlePageChange = (pageNumber) => {
    if (!disablePagination) {
      changePage(pageNumber);
    }
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" py={3}>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF34E2" }}
        onClick={() => handlePageChange(paginatedItem?.currentPage - 1)}
        disabled={paginatedItem?.currentPage === 1}
        sx={{
          color: "white",
          fontSize: "1.25rem", // Equivalent to text-lg
          fontWeight: "bold",
          padding: "12px 24px", // Equivalent to pt-3.5 pb-3.5 px-6
          borderRadius: "8px", // Rounded corners
          "&:disabled": {
            backgroundColor: "#d3d3d3", // Disabled button color
          },
        }}
      >
        Prev
      </Button>
      <Typography
        variant="h6"
        style={{
          backgroundColor: "#FF34E2",
          color: "white",
          padding: "12px 16px",
          borderRadius: "8px",
        }}
      >
        {paginatedItem?.currentPage}
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF34E2" }}
        onClick={() => handlePageChange(paginatedItem?.currentPage + 1)}
        disabled={paginatedItem?.currentPage === paginatedItem?.lastPage}
        sx={{
          color: "white",
          fontSize: "1.25rem",
          fontWeight: "bold",
          padding: "12px 24px",
          borderRadius: "8px",
          "&:disabled": {
            backgroundColor: "#d3d3d3",
          },
        }}
      >
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;
