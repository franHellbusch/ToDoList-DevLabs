import { inject, injectable } from "inversify";
import BaseRouter from "../../../shared/routes/baseRouter";
import TODO_TYPES from "../types/toDoTypes";
import ToDoController from "../controllers/toDoController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";

@injectable()
class ToDoRouter extends BaseRouter {
  constructor(@inject(TODO_TYPES.ToDoController) private readonly toDoController: ToDoController) {
    super();
  }

  initRoutes(): void {
    this.get("/todos", authMiddleware, (...params) => this.toDoController.getAllToDos(...params));
    this.get("/todos/:id", authMiddleware, (...params) =>
      this.toDoController.getToDoById(...params)
    );
    this.post("/todos", authMiddleware, (...params) => this.toDoController.createToDo(...params));
    this.put("/todos/:id", authMiddleware, (...params) =>
      this.toDoController.updateToDoById(...params)
    );
    this.delete("/todos/:id", authMiddleware, (...params) =>
      this.toDoController.deleteToDoById(...params)
    );
  }
}

export default ToDoRouter;
