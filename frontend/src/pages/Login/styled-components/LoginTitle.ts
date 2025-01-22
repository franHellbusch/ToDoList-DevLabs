import { styled, Typography, TypographyProps } from "@mui/material";

export const LoginTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: 10,
  fontWeight: 500,

  "& > span": {
    color: theme.palette.primary.main,
  },
}));
