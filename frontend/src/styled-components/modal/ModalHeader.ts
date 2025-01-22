import { Box, styled } from "@mui/material";

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  borderBottom: `2px solid ${theme.palette.grey[200]}`,
  paddingBottom: 15,
}));
