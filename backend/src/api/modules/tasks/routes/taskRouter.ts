import { inject, injectable } from "inversify";
import BaseRouter from "../../../shared/routes/baseRouter";
import Task_TYPES from "../types/taskTypes";
import TaskController from "../controllers/tasksController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";

@injectable()
class TaskRouter extends BaseRouter {
  constructor(@inject(Task_TYPES.TaskController) private readonly taskController: TaskController) {
    super();
  }

  initRoutes(): void {
    this.get("/tasks", authMiddleware, (...params) => this.taskController.getAllTasks(...params));
    this.get("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.getTaskById(...params)
    );
    this.post("/tasks", authMiddleware, (...params) => this.taskController.createTask(...params));
    this.put("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.updateTaskById(...params)
    );
    this.delete("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.deleteTaskById(...params)
    );
  }
}

export default TaskRouter;
