import { styled, Card } from "@mui/material";

export const TaskItemCard = styled(Card)(({ theme }) => ({
  padding: "10px 20px",
  border: `2px solid ${theme.palette.grey[200]}`,
  borderRadius: 20,
}));
