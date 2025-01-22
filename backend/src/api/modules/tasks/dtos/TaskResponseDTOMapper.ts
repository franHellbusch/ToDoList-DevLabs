import IDBTask from "../interfaces/IDBTask";
import { IResponseTaskDTO } from "./IResponseTaskDTO";

class TaskResponseDTOMapper {
  static toDTO(task: IDBTask): IResponseTaskDTO {
    const taskData: IResponseTaskDTO = {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      updatedAt: task.updatedAt,
      createdAt: task.createdAt,
      dueDate: task.dueDate,
      priority: task.priority,
    };

    return taskData;
  }

  static toListDTO(tasks: IDBTask[]): IResponseTaskDTO[] {
    return tasks.map((task) => TaskResponseDTOMapper.toDTO(task));
  }
}

export default TaskResponseDTOMapper;
