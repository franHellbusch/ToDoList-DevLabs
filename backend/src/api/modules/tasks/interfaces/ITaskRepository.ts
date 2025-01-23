import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";
import IDBTask from "./IDBTask";

export interface ITaskRepository {
  getAllByUser(userId: string): Promise<IDBTask[]>;
  getByIdAndUser(id: string, userId: string): Promise<IDBTask | null>;
  createOne(task: ICreateTaskDTO, userId: string): Promise<IDBTask>;
  updateByIdAndUser(id: string, updatedInfo: IUpdateTaskDTO, userId: string): Promise<IDBTask>;
  deleteByIdAndUser(id: string, userId: string): Promise<void>;
}
