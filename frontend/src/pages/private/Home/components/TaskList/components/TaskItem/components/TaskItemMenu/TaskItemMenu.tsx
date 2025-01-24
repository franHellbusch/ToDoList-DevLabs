import { StyledMenu } from "@/styled-components";
import { Box, IconButton, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import { ITask } from "@/interfaces/ITask";

interface ITaskItemMenuProps {
  onDelete: () => void;
  onCompleted: () => void;
  onOpenModal: (task: ITask) => void;
  task: ITask;
}

const TaskItemMenu: React.FC<ITaskItemMenuProps> = ({
  onDelete,
  onCompleted,
  onOpenModal,
  task,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

   // Handles the click event on the menu button.
   const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handles the closing of the menu.
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handles the delete action.
  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  // Handles the complete/uncomplete action.
  const handleCompleted = () => {
    onCompleted();
    handleClose();
  };

  // Handles the "Edit" action.
  const handleOpenUpdateModal = () => {
    onOpenModal(task);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenUpdateModal} disableRipple>
          <EditRoundedIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleCompleted} disableRipple>
          {task.completed ? (
            <QueryBuilderRoundedIcon />
          ) : (
            <DoneAllRoundedIcon />
          )}
          Set as {task.completed ? "Pending" : "Completed"}
        </MenuItem>
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteRoundedIcon />
          Delete Permanently
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};

export default TaskItemMenu;
