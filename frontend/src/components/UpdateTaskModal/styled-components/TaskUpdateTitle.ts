import { styled, Typography, TypographyProps } from "@mui/material";

export const TaskUpdateTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 5,

    "& > span": {
      color: theme.palette.primary.main,
    },
  }),
);
