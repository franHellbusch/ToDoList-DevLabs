import { ITask } from "@/interfaces/ITask";
import { TaskListBox } from "./styled-components";
import TaskItem from "./components/TaskItem/TaskItem";
import { Typography } from "@mui/material";

interface ITaskListProps {
  tasks: ITask[];
}

const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <>
      {pendingTasks.length > 0 && (
        <TaskListBox>
          <Typography variant="subtitle2" component="h3">
            Pending Tasks
          </Typography>
          {pendingTasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </TaskListBox>
      )}
      {completedTasks.length > 0 && (
        <TaskListBox>
          <Typography variant="subtitle2" component="h3">
            Completed Tasks
          </Typography>
          {completedTasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </TaskListBox>
      )}
    </>
  );
};

export default TaskList;
