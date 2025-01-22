import { Box, Chip, Collapse, Typography } from "@mui/material";
import { TaskCollapseFieldTitle } from "./styled-components";
import { ITask, Priority } from "@/interfaces/ITask";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import SentimentNeutralRoundedIcon from "@mui/icons-material/SentimentNeutralRounded";
import dayjs from "dayjs";

interface ITaskItemCollapseProps {
  task: ITask;
  expanded: boolean;
}

const TaskItemCollapse: React.FC<ITaskItemCollapseProps> = ({
  task,
  expanded,
}) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Box display="flex" flexWrap="wrap" gap="20px" marginTop="20px">
        <Box display="flex" flexDirection="column" gap="5px" flex="1">
          <TaskCollapseFieldTitle variant="h6" component="h5">
            <CreateNewFolderRoundedIcon fontSize="small" />
            Created At:
          </TaskCollapseFieldTitle>
          <Typography variant="body1" component="p">
            {dayjs(task.createdAt).format("YYYY-MM-DD ")}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="5px" flex="1">
          <TaskCollapseFieldTitle variant="h6" component="h5">
            <AccessAlarmRoundedIcon fontSize="small" />
            Due Date:
          </TaskCollapseFieldTitle>
          <Box display="flex" gap="5px" alignItems="center">
            <Typography variant="body1" component="p">
              {dayjs(task.dueDate).format("YYYY-MM-DD ")}
            </Typography>
            {dayjs(task.dueDate).isBefore(dayjs(), "day") && (
              <Chip
                icon={<ReportGmailerrorredRoundedIcon />}
                label="expired"
                variant="outlined"
                color="error"
                size="small"
              />
            )}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="5px" flex="1">
          <TaskCollapseFieldTitle variant="h6" component="h5">
            <ReportGmailerrorredRoundedIcon fontSize="small" />
            Priority:
          </TaskCollapseFieldTitle>
          <Box>
            {task.priority == Priority.LOW && (
              <Chip
                icon={<SentimentVerySatisfiedRoundedIcon />}
                label={task.priority}
                variant="outlined"
                color="info"
                size="small"
              />
            )}
            {task.priority == Priority.MEDIUM && (
              <Chip
                icon={<SentimentNeutralRoundedIcon />}
                label={task.priority}
                variant="outlined"
                color="warning"
                size="small"
              />
            )}
            {task.priority == Priority.HIGH && (
              <Chip
                icon={<MoodBadRoundedIcon />}
                label={task.priority}
                variant="outlined"
                color="error"
                size="small"
              />
            )}
          </Box>
        </Box>
        {task.description && (
          <Box width="100%" display="flex" flexDirection="column" gap="5px">
            <TaskCollapseFieldTitle variant="h6" component="h5">
              <DescriptionRoundedIcon fontSize="small" />
              Description:
            </TaskCollapseFieldTitle>
            <Typography variant="body1" component="p">
              {task.description}
            </Typography>
          </Box>
        )}
      </Box>
    </Collapse>
  );
};

export default TaskItemCollapse;
