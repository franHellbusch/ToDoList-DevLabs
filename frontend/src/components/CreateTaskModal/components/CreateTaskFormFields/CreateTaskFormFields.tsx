import ICreateTaskDTO from "@/dtos/ICreateTaskDTO";
import { Priority } from "@/interfaces/ITask";
import { FormRowContainer } from "@/styled-components";
import { MenuItem, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";

interface CreateTaskFormFieldsProps {
  control: Control<ICreateTaskDTO>;
}

const CreateTaskFormFields: React.FC<CreateTaskFormFieldsProps> = ({
  control,
}) => (
  <>
    <Controller
      name="title"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          label="Title"
          size="small"
          fullWidth
          placeholder="Task Title"
          required
          {...field}
        />
      )}
    />
    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <TextField
          label="Description (optional)"
          size="small"
          placeholder="Enter your task description..."
          multiline
          rows={4}
          fullWidth
          {...field}
        />
      )}
    />
    <FormRowContainer>
      <Controller
        name="dueDate"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DesktopDatePicker
            label="Due Date"
            minDate={dayjs()}
            defaultValue={dayjs()}
            slotProps={{ textField: { size: "small" } }}
            {...field}
          />
        )}
      />
      <Controller
        name="priority"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            select
            label="Priority"
            size="small"
            fullWidth
            required
            {...field}
          >
            <MenuItem value={Priority.LOW}>Low</MenuItem>
            <MenuItem value={Priority.MEDIUM}>Medium</MenuItem>
            <MenuItem value={Priority.HIGH}>High</MenuItem>
          </TextField>
        )}
      />
    </FormRowContainer>
  </>
);

export default CreateTaskFormFields;
