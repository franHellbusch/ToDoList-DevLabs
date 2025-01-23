import { Box, styled } from "@mui/material";

export const TasksBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `2px solid ${theme.palette.grey[200]}`,
}));
