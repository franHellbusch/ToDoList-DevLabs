import { styled, Typography, TypographyProps } from "@mui/material";

export const TaskCollapseFieldTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    gap: 5,
  }),
);
