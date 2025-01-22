import { taskModel } from "../models/taskModel";
import { IDBMongoTask } from "../interfaces/IDBMongoTask";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { BaseMongoRepository } from "../../../shared/repositories/baseMongoRepository";
import IDBTask from "../interfaces/IDBTask";
import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";

class TaskMongoRepository extends BaseMongoRepository<IDBMongoTask> implements ITaskRepository {
  constructor() {
    super(taskModel);
  }

  async getAllByUser(userId: string): Promise<IDBTask[]> {
    return await this.getAll({ userId });
  }

  async getByIdAndUser(id: string, userId: string): Promise<IDBTask | null> {
    return await this.getBy({ _id: id, userId });
  }

  async createOne(task: ICreateTaskDTO, userId: string): Promise<IDBTask> {
    return await this.create({ ...task, userId });
  }

  async updateByIdAndUser(
    id: string,
    updatedInfo: IUpdateTaskDTO,
    userId: string
  ): Promise<IDBTask> {
    return await this.updateBy({ _id: id, userId }, updatedInfo);
  }

  async deleteByIdAndUser(id: string, userId: string): Promise<void> {
    await this.deleteBy({ _id: id, userId });
  }
}

export default TaskMongoRepository;
