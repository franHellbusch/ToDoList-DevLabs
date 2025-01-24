import { taskModel } from "../models/taskModel";
import { IDBMongoTask } from "../interfaces/IDBMongoTask";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { BaseMongoRepository } from "../../../shared/repositories/baseMongoRepository";
import IDBTask from "../interfaces/IDBTask";
import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";

/**
 * Mongoose repository for managing task-related data.
 * Extends the BaseMongoRepository to provide CRUD operations for task documents.
 */
class TaskMongoRepository extends BaseMongoRepository<IDBMongoTask> implements ITaskRepository {
  constructor() {
    super(taskModel);
  }

  /**
   * Retrieves all tasks associated with the specified user.
   *
   * @param userId The ID of the user.
   * @returns {Promise<IDBTask[]>} A Promise that resolves to an array of tasks.
   */
  async getAllByUser(userId: string): Promise<IDBTask[]> {
    return await this.getAll({ userId });
  }

  /**
   * Retrieves a specific task by ID for the specified user.
   *
   * @param id The ID of the task.
   * @param userId The ID of the user.
   * @returns {Promise<IDBTask>} A Promise that resolves to the task, or null if not found.
   */
  async getByIdAndUser(id: string, userId: string): Promise<IDBTask | null> {
    return await this.getBy({ _id: id, userId });
  }

  /**
   * Creates a new task for the specified user.
   *
   * @param task The task data to create.
   * @param userId The ID of the user creating the task.
   * @returns {Promise<IDBTask>} A Promise that resolves to the newly created task.
   */
  async createOne(task: ICreateTaskDTO, userId: string): Promise<IDBTask> {
    return await this.create({ ...task, userId });
  }

  /**
   * Updates an existing task for the specified user.
   *
   * @param id The ID of the task to update.
   * @param updatedInfo The updated task data.
   * @param userId The ID of the user updating the task.
   * @returns {Promise<IDBTask>} A Promise that resolves to the updated task.
   */
  async updateByIdAndUser(
    id: string,
    updatedInfo: IUpdateTaskDTO,
    userId: string
  ): Promise<IDBTask> {
    return await this.updateBy({ _id: id, userId }, updatedInfo);
  }

  /**
   * Deletes a task by ID for the specified user.
   *
   * @param id The ID of the task to delete.
   * @param userId The ID of the user deleting the task.
   */
  async deleteByIdAndUser(id: string, userId: string): Promise<void> {
    await this.deleteBy({ _id: id, userId });
  }
}

export default TaskMongoRepository;
