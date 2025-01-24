import { useAppDispatch } from "@/hooks/redux";
import { ITask } from "@/interfaces/ITask";
import { deleteTask, updateTask } from "@/services/tasksServices";
import { deleteOneTask, updateOneTask } from "@/store/states/task";
import { useMutation } from "@tanstack/react-query";
import {
  OpenTaskItemButton,
  TaskItemCard,
  TaskItemContent,
} from "./styled-components";
import { Box, Chip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useState } from "react";
import TaskItemMenu from "./components/TaskItemMenu/TaskItemMenu";
import TaskItemCollapse from "./components/TaskItemCollapse/TaskItemCollapse";
import IUpdateTaskDTO from "@/dtos/IUpdateTaskDTO";
import { useAlert } from "@/hooks/useAlert";
import { useModal } from "@/hooks/useModal";

interface ITaskItemProps {
  task: ITask;
}

const TaskItem: React.FC<ITaskItemProps> = ({ task }) => {
  const { showUpdateTaskModal } = useModal();
  const { showAlert } = useAlert();
  const dispatch = useAppDispatch();
  const [expandedCollapse, setExpandedCollapse] = useState(false);

  const handleExpandClick = () => {
    setExpandedCollapse(!expandedCollapse);
  };

  // Manage the asynchronous task delete process.
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      dispatch(deleteOneTask(task.id));
      showAlert("Successfuly deleted", "success");
    },
    onError: (error) => {
      showAlert(error.message, "error");
    },
  });

  const handleDelete = () => deleteMutation.mutate(task.id);

  // Handle the task update logic.
  const mutationUpdateTaskFn = async (updatedTask: IUpdateTaskDTO) => {
    return await updateTask(task.id, updatedTask);
  };

  // Manage the asynchronous task update process.
  const updateMutation = useMutation({
    mutationFn: mutationUpdateTaskFn,
    onSuccess: (updatedTask) => {
      dispatch(updateOneTask(updatedTask));
      showAlert("Successfuly status changed", "success");
    },
    onError: (error) => {
      showAlert(error.message, "error");
    },
  });

  // handle cempleted status change.
  const handleUpdateCompleted = () =>
    updateMutation.mutate({ completed: !task.completed });

  return (
    <>
      <TaskItemCard elevation={0}>
        <TaskItemContent>
          <Box display="flex" gap="10px" alignItems="center">
            <OpenTaskItemButton open={expandedCollapse} onClick={handleExpandClick}>
              <ExpandMoreIcon />
            </OpenTaskItemButton>
            {task.completed ? (
              <Chip
                variant="outlined"
                color="success"
                size="small"
                label="completed"
                icon={<DoneAllRoundedIcon />}
              />
            ) : (
              <Chip
                variant="outlined"
                color="info"
                size="small"
                icon={<AccessTimeRoundedIcon />}
                label="pending"
              />
            )}
            <Typography variant="h5" component="h4">
              {task.title}
            </Typography>
          </Box>
          <TaskItemMenu
            onOpenModal={showUpdateTaskModal}
            onDelete={handleDelete}
            onCompleted={handleUpdateCompleted}
            task={task}
          />
        </TaskItemContent>
        <TaskItemCollapse expanded={expandedCollapse} task={task} />
      </TaskItemCard>
    </>
  );
};

export default TaskItem;
