import { inject, injectable } from "inversify";
import BaseRouter from "../../../shared/routes/baseRouter";
import Task_TYPES from "../types/taskTypes";
import TaskController from "../controllers/tasksController";
import { authMiddleware } from "../../../shared/middlewares/authMiddleware";

/**
 * Router class for task-related API endpoints.
 * Handles requests for CRUD operations on tasks.
 */
@injectable()
class TaskRouter extends BaseRouter {
  constructor(@inject(Task_TYPES.TaskController) private readonly taskController: TaskController) {
    super();
  }

  initRoutes(): void {
    // Protected routes requiring authentication

    // GET /api/todos - Retrieve all tasks for the authenticated user.
    this.get("/tasks", authMiddleware, (...params) => this.taskController.getAllTasks(...params));

    // GET /tasks/:id - Retrieve a specific task by ID.
    this.get("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.getTaskById(...params)
    );

    // POST /api/todos - Create a new task
    this.post("/tasks", authMiddleware, (...params) => this.taskController.createTask(...params));

    // PUT /api/todos/:id - Update a task by ID.
    this.put("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.updateTaskById(...params)
    );

    // DELETE /api/todos/:id - Delete a task by ID.
    this.delete("/tasks/:id", authMiddleware, (...params) =>
      this.taskController.deleteTaskById(...params)
    );
  }
}

export default TaskRouter;
