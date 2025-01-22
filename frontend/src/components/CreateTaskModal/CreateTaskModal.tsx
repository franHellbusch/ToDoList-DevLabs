import ICreateTaskDTO from "@/dtos/ICreateTaskDTO";
import { Priority } from "@/interfaces/ITask";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addTask } from "@/store/states/task";
import { createTask } from "@/services/tasksServices";
import { useAppDispatch } from "@/hooks/redux";
import { Typography } from "@mui/material";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import {
  ModalBody,
  ModalBox,
  ModalHeader,
  Form,
  SubmitButton,
  CancelButton,
} from "@/styled-components";
import { TaskFormButtonsBox, TaskFormTitle } from "./styled-components";
import dayjs from "dayjs";
import { useAlert } from "@/hooks/useAlert";
import CreateTaskFormFields from "./components/CreateTaskFormFields/CreateTaskFormFields";

interface CreateTaskModalProps {
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onClose }) => {
  const { showAlert } = useAlert();
  const dispatch = useAppDispatch();
  const { handleSubmit, control, reset } = useForm<ICreateTaskDTO>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: dayjs(),
      priority: Priority.LOW,
    },
  });

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      dispatch(addTask(data));
      showAlert("Task has been successfully created", "success");
      onClose();
      reset();
    },
    onError: (error) => {
      showAlert(error.message, "error");
    },
  });

  const onSubmit: SubmitHandler<ICreateTaskDTO> = (data) =>
    mutation.mutate(data);

  return (
    <ModalBox>
      <ModalHeader>
        <TaskFormTitle component="h3" variant="subtitle1">
          <CreateNewFolderRoundedIcon />
          Create a New <span>Task</span>
        </TaskFormTitle>
        <Typography variant="body1" component="p">
          Please provide the necessary details below
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CreateTaskFormFields control={control} />
          <TaskFormButtonsBox>
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
              variant="contained"
              color="info"
              loading={mutation.isPending}
            >
              Add
            </SubmitButton>
          </TaskFormButtonsBox>
        </Form>
      </ModalBody>
    </ModalBox>
  );
};

export default CreateTaskModal;
