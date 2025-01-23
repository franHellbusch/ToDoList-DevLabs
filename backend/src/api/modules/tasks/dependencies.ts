import { Container } from "inversify";
import TASK_TYPES from "./types/taskTypes";
import TaskRouter from "./routes/taskRouter";
import { ITaskRepository } from "./interfaces/ITaskRepository";
import TaskMongoRepository from "./repositories/taskMongoRepository";
import TaskService from "./services/taskService";
import TaskController from "./controllers/tasksController";
import { ITaskService } from "./interfaces/ITaskService";

export const taskContainer = new Container();

taskContainer.bind<ITaskRepository>(TASK_TYPES.TaskRepository).to(TaskMongoRepository);
taskContainer.bind<ITaskService>(TASK_TYPES.TaskService).to(TaskService);
taskContainer.bind<TaskController>(TASK_TYPES.TaskController).to(TaskController);
taskContainer.bind<TaskRouter>(TASK_TYPES.TaskRouter).to(TaskRouter);

const taskRouter = taskContainer.get<TaskRouter>(TASK_TYPES.TaskRouter);

export default taskRouter;
