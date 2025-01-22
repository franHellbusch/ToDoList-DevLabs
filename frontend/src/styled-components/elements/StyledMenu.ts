import { Menu, styled } from "@mui/material";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    background: theme.palette.background.default,
    border: `2px solid ${theme.palette.grey[200]}`,
    "& .MuiMenuItem-root": {
      fontSize: 14,
      color: theme.palette.text.secondary,
      "& .MuiSvgIcon-root": { marginRight: theme.spacing(1.5) },
    },
  },
}));
