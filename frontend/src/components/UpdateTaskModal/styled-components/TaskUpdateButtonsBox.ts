import { Box, styled } from "@mui/material";

export const TaskUpdateButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  borderTop: `2px solid ${theme.palette.grey[200]}`,
  paddingTop: 15,
  marginTop: 5,
}));
