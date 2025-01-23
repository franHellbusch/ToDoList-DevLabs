import { styled, Typography, TypographyProps } from "@mui/material";

export const AppBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: theme.palette.text.primary,
}));
