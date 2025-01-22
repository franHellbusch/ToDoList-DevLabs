import { styled, IconButton } from "@mui/material";

interface OpenTaskItemButtonProps {
  open: boolean;
}

export const OpenTaskItemButton = styled(IconButton)<OpenTaskItemButtonProps>(
  ({ open }) => ({
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "0.3s",
  }),
);
