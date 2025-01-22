import { inject, injectable } from "inversify";
import { ITaskService } from "../interfaces/ITaskService";
import Task_TYPES from "../types/taskTypes";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import IDBTask from "../interfaces/IDBTask";
import { taskPartialZodSchema, taskStrictZodSchema } from "../schemas/taskZodSchema";
import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";
import { ErrorNames } from "../../../shared/helpers/errorNames";
import { createCustomError } from "../../../shared/helpers/createCustomError";

@injectable()
class TaskService implements ITaskService {
  constructor(
    @inject(Task_TYPES.TaskRepository) private readonly taskRepository: ITaskRepository
  ) {}

  async getAllTasksByUser(userId: string): Promise<IDBTask[]> {
    return this.taskRepository.getAllByUser(userId);
  }

  async getTaskByIdAndUser(id: string, userId: string): Promise<IDBTask> {
    const task = await this.taskRepository.getByIdAndUser(id, userId);

    if (!task) {
      throw createCustomError(ErrorNames.NOT_FOUND);
    }

    return task;
  }

  async createOneTask(task: ICreateTaskDTO, userId: string): Promise<IDBTask> {
    const parsedUserData = taskStrictZodSchema.parse(task);

    const newTask = await this.taskRepository.createOne(parsedUserData, userId);

    return newTask;
  }

  async updateTaskByIdAndUser(
    id: string,
    updatedInfo: IUpdateTaskDTO,
    userId: string
  ): Promise<IDBTask> {
    const parseUpdatedInfo = taskPartialZodSchema.parse(updatedInfo);

    const task = await this.taskRepository.getByIdAndUser(id, userId);

    if (!task) {
      throw createCustomError(ErrorNames.NOT_FOUND);
    }

    const updatedUser = await this.taskRepository.updateByIdAndUser(id, parseUpdatedInfo, userId);

    return updatedUser;
  }

  async deleteTaskByIdAndUser(id: string, userId: string): Promise<void> {
    const task = await this.taskRepository.getByIdAndUser(id, userId);

    if (!task) {
      throw createCustomError(ErrorNames.NOT_FOUND);
    }

    this.taskRepository.deleteByIdAndUser(id, userId);
  }
}

export default TaskService;
