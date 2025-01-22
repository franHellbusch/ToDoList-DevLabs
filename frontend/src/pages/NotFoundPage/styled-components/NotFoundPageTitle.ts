import { styled, Typography, TypographyProps } from "@mui/material";

export const NotFoundPageTitle = styled(Typography)<TypographyProps>(() => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 800,
  marginBottom: 10,
}));
