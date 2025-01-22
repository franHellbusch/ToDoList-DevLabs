import { Container } from "inversify";
import TASK_TYPES from "./types/taskTypes";
import TaskRouter from "./routes/taskRouter";
import { ITaskRepository } from "./interfaces/ITaskRepository";
import TaskMongoRepository from "./repositories/taskMongoRepository";
import TaskService from "./services/taskService";
import TaskController from "./controllers/tasksController";
import { ITaskService } from "./interfaces/ITaskService";

const container = new Container();

container.bind<ITaskRepository>(TASK_TYPES.TaskRepository).to(TaskMongoRepository);
container.bind<ITaskService>(TASK_TYPES.TaskService).to(TaskService);
container.bind<TaskController>(TASK_TYPES.TaskController).to(TaskController);
container.bind<TaskRouter>(TASK_TYPES.TaskRouter).to(TaskRouter);

const taskRouter = container.get<TaskRouter>(TASK_TYPES.TaskRouter);

export default taskRouter;
