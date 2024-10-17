import { Box, Pagination, Stack } from "@mui/material";
import React from "react";

const pageSize = 8;

export const AppPagination = ({ totalProducts, currentPage, handlePageChange }) => {
  const pageCount = Math.ceil(totalProducts / pageSize);

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        margin: "20px 0",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
};
