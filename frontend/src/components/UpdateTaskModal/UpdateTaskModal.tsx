import { Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  ModalBody,
  ModalBox,
  ModalHeader,
  Form,
  SubmitButton,
  CancelButton,
} from "@/styled-components";
import { TaskUpdateButtonsBox, TaskUpdateTitle } from "./styled-components";
import IUpdateTaskDTO from "@/dtos/IUpdateTaskDTO";
import { useForm } from "react-hook-form";
import { ITask } from "@/interfaces/ITask";
import dayjs from "dayjs";
import { updateTask } from "@/services/tasksServices";
import { useMutation } from "@tanstack/react-query";
import { updateOneTask } from "@/store/states/task";
import { useAppDispatch } from "@/hooks/redux";
import { useAlert } from "@/hooks/useAlert";
import UpdateTaskFormFields from "./components/UpdateTaskFormFields/UpdateTaskFormFields";

interface UpdateTaskModalProps {
  onClose: () => void;
  selectedTask: ITask;
}

const UpdateTaskModal: React.FC<UpdateTaskModalProps> = ({
  onClose,
  selectedTask,
}) => {
  const { showAlert } = useAlert();
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<IUpdateTaskDTO>({
    defaultValues: {
      title: selectedTask.title,
      description: selectedTask.description,
      dueDate: dayjs(selectedTask.dueDate),
      priority: selectedTask.priority,
      completed: selectedTask.completed,
    },
  });

  const mutationUpdateTaskFn = async (updatedTask: IUpdateTaskDTO) => {
    return await updateTask(selectedTask.id, updatedTask);
  };

  const mutation = useMutation({
    mutationFn: mutationUpdateTaskFn,
    onSuccess: (updatedTask) => {
      dispatch(updateOneTask(updatedTask));
      showAlert("Task has been successfully updated", "success");
      onClose();
    },
    onError: (error) => {
      showAlert(error.message, "error");
    },
  });

  const handleUpdate = (updatedInfo: IUpdateTaskDTO) => {
    mutation.mutate(updatedInfo);
  };

  return (
    <>
      <ModalBox>
        <ModalHeader>
          <TaskUpdateTitle component="h3" variant="subtitle1">
            <EditRoundedIcon />
            Update <span>Task</span>
          </TaskUpdateTitle>
          <Typography variant="body1" component="p">
            Edit the task details below
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(handleUpdate)}>
            <UpdateTaskFormFields control={control} />
            <TaskUpdateButtonsBox>
              <CancelButton
                type="button"
                onClick={onClose}
                variant="outlined"
                color="inherit"
              >
                Cancel
              </CancelButton>
              <SubmitButton
                type="submit"
                loading={mutation.isPending}
                variant="contained"
                color="info"
              >
                Save
              </SubmitButton>
            </TaskUpdateButtonsBox>
          </Form>
        </ModalBody>
      </ModalBox>
    </>
  );
};

export default UpdateTaskModal;
