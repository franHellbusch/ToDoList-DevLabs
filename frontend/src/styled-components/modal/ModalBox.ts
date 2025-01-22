import { Box, styled } from "@mui/material";

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "calc(100% - 40px)",
  background: theme.palette.background.default,
  padding: 20,
  borderRadius: 10,
  margin: "20px 0",
}));
