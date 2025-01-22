import { Box, styled } from "@mui/material";

export const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  background: theme.palette.background.default,
}));
