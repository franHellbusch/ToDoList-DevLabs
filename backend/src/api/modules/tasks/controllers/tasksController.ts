import { inject, injectable } from "inversify";
import TASK_TYPES from "../types/taskTypes";
import { ITaskService } from "../interfaces/ITaskService";
import { NextFunction, Request, Response } from "express";
import TaskResponseDTOMapper from "../dtos/TaskResponseDTOMapper";
import { createCustomError } from "../../../shared/helpers/createCustomError";
import { ErrorNames } from "../../../shared/helpers/errorNames";

@injectable()
class TaskController {
  constructor(@inject(TASK_TYPES.TaskService) private readonly taskService: ITaskService) {}

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
