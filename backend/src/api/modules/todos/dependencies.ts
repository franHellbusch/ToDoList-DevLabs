import { Container } from "inversify";
import TODO_TYPES from "./types/toDoTypes";
import ToDoRouter from "./routes/toDoRouter";
import { IToDoRepository } from "./interfaces/IToDoRepository";
import ToDoMongoRepository from "./repositories/toDoMongoRepository";
import ToDoService from "./services/toDoService";
import ToDoController from "./controllers/toDoController";
import { IToDoService } from "./interfaces/IToDoService";

const container = new Container();

container.bind<IToDoRepository>(TODO_TYPES.ToDoRepository).to(ToDoMongoRepository);
container.bind<IToDoService>(TODO_TYPES.ToDoService).to(ToDoService);
container.bind<ToDoController>(TODO_TYPES.ToDoController).to(ToDoController);
container.bind<ToDoRouter>(TODO_TYPES.ToDoRouter).to(ToDoRouter);

const toDoRouter = container.get<ToDoRouter>(TODO_TYPES.ToDoRouter);

export default toDoRouter;
