import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";
import IDBTask from "./IDBTask";

export interface ITaskService {
  getAllTasksByUser(userId: string): Promise<IDBTask[]>;
  getTaskByIdAndUser(id: string, userId: string): Promise<IDBTask>;
  createOneTask(task: ICreateTaskDTO, userId: string): Promise<IDBTask>;
  updateTaskByIdAndUser(id: string, updatedInfo: IUpdateTaskDTO, userId: string): Promise<IDBTask>;
  deleteTaskByIdAndUser(id: string, userId: string): Promise<void>;
}
