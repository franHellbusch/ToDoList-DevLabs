import { SyntheticEvent, useState } from "react";
import { getAllTasks } from "@/services/tasksServices";
import { setTasks } from "@/store/states/task";
import { useQuery } from "@tanstack/react-query";
import TaskList from "./components/TaskList/TaskList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Box, CircularProgress, Tabs, Typography } from "@mui/material";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import {
  AddTaskButton,
  HomeContainer,
  TasksBar,
  TasksBarTab,
} from "./styled-components";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useAlert } from "@/hooks/useAlert";
import { useModal } from "@/hooks/useModal";

const Home: React.FC = () => {
  const { showCreateTaskModal } = useModal();
  const { showAlert } = useAlert();
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0); // Active tab index (0 for All, 1 for Today)

  // Handles tab selection changes.
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Fetches all tasks from the API and updates the Redux store.
  const getTasks = async () => {
    const data = await getAllTasks();
    dispatch(setTasks(data));
    return data;
  };

  const { isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  // Handles errors during data fetching.
  if (isError) {
    showAlert(error.message, "error");
  }

  const tabs = {
    TODAY: "Today",
    ALL: "All",
  };

  return (
    <HomeContainer fixed>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <Typography variant="subtitle1" component="h3">
          Your Tasks
        </Typography>
        <Typography variant="body1" component="p">
          Manage your daily schedule and stay organized.
        </Typography>
      </Box>
      <TasksBar>
        <Tabs value={value} onChange={handleChange}>
          <TasksBarTab label={tabs.ALL} />
          <TasksBarTab label={tabs.TODAY} />
        </Tabs>
        <AddTaskButton
          onClick={showCreateTaskModal}
          variant="outlined"
          color="success"
        >
          <CreateNewFolderRoundedIcon fontSize="small" />
          Add Task
        </AddTaskButton>
      </TasksBar>
      <Typography marginTop="20px" variant="body1" component="p">
        Tasks displayed are based on their due date. Use the filters above to
        view all tasks or those due today or before (
        {dayjs().format("MMMM D, YYYY")}).
      </Typography>
      {isLoading ? (
        <Box display="flex" justifyContent="center" marginTop="40px">
          <CircularProgress />
        </Box>
      ) : tasks.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
          marginTop={10}
        >
          <Typography variant="subtitle1" component="h4">
            Start with your Task List!
          </Typography>
          <Typography variant="body2" component="p">
            No tasks found. Add some tasks to get started.
          </Typography>
          <AddTaskButton
            variant="outlined"
            color="success"
            size="large"
            onClick={showCreateTaskModal}
          >
            <CreateNewFolderRoundedIcon fontSize="large" />
            Add Task
          </AddTaskButton>
        </Box>
      ) : (
        <TaskList
          tasks={
            value === 0
              ? tasks
              : tasks.filter((task) => {
                  dayjs.extend(isSameOrBefore);
                  return dayjs(task.dueDate).isSameOrBefore(dayjs(), "day");
                })
          }
        />
      )}
    </HomeContainer>
  );
};

export default Home;
