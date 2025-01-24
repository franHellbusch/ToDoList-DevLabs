import { inject, injectable } from "inversify";
import TASK_TYPES from "../types/taskTypes";
import { ITaskService } from "../interfaces/ITaskService";
import { NextFunction, Request, Response } from "express";
import TaskResponseDTOMapper from "../dtos/TaskResponseDTOMapper";
import { createCustomError } from "../../../shared/helpers/createCustomError";
import { ErrorNames } from "../../../shared/helpers/errorNames";

/**
 * Controller for handling task-related requests.
 */
@injectable()
class TaskController {
  constructor(@inject(TASK_TYPES.TaskService) private readonly taskService: ITaskService) {}

  /**
   * Retrieves a list of all tasks for the authenticated user.
   */
  async getAllTasks(req: Request, res: Response, _next: NextFunction) {
    if (!req.auth || !req.auth.payload || !req.auth.payload.sub) {
      throw createCustomError(ErrorNames.UNAUTHORIZED);
    }

    const userId = req.auth.payload.sub;
    const taskList = await this.taskService.getAllTasksByUser(userId);

    res.status(200).json({
      success: true,
      payload: TaskResponseDTOMapper.toListDTO(taskList),
    });
  }

  /**
   * Retrieves a specific task by its ID.
   */
  async getTaskById(req: Request, res: Response, _next: NextFunction) {
    if (!req.auth || !req.auth.payload || !req.auth.payload.sub) {
      throw createCustomError(ErrorNames.UNAUTHORIZED);
    }

    const userId = req.auth.payload.sub;
    const { id } = req.params;
    const task = await this.taskService.getTaskByIdAndUser(id, userId);

    res.status(200).json({
      success: true,
      payload: TaskResponseDTOMapper.toDTO(task),
    });
  }

  /**
   * Creates a new task for the authenticated user.
   */
  async createTask(req: Request, res: Response, _next: NextFunction) {
    if (!req.auth || !req.auth.payload || !req.auth.payload.sub) {
      throw createCustomError(ErrorNames.UNAUTHORIZED);
    }

    const userId = req.auth.payload.sub;
    const task = await this.taskService.createOneTask(req.body, userId);

    res.status(201).json({
      success: true,
      payload: TaskResponseDTOMapper.toDTO(task),
    });
  }

  /**
   * Updates an existing task by its ID.
   */
  async updateTaskById(req: Request, res: Response, _next: NextFunction) {
    if (!req.auth || !req.auth.payload || !req.auth.payload.sub) {
      throw createCustomError(ErrorNames.UNAUTHORIZED);
    }

    const userId = req.auth.payload.sub;
    const { id } = req.params;
    const task = await this.taskService.updateTaskByIdAndUser(id, req.body, userId);

    res.status(200).json({
      success: true,
      payload: TaskResponseDTOMapper.toDTO(task),
    });
  }

  /**
   * Deletes a task by its ID.
   */
  async deleteTaskById(req: Request, res: Response, _next: NextFunction) {
    if (!req.auth || !req.auth.payload || !req.auth.payload.sub) {
      throw createCustomError(ErrorNames.UNAUTHORIZED);
    }

    const userId = req.auth.payload.sub;
    const { id } = req.params;
    await this.taskService.deleteTaskByIdAndUser(id, userId);

    res.status(204).send();
  }
}

export default TaskController;
