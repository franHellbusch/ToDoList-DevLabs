import IDBTask from "../interfaces/IDBTask";
import { IResponseTaskDTO } from "./IResponseTaskDTO";

/**
 * Class responsible for mapping Task entities to response DTOs.
 */
class TaskResponseDTOMapper {
  /**
   * Converts a single IDBTask to a corresponding IResponseTaskDTO.
   *
   * @param task The IDBTask to be converted.
   * @returns {IResponseTaskDTO} The converted IResponseTaskDTO.
   */
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

  /**
   * Converts an array of IDBTask objects to an array of corresponding IResponseTaskDTO objects.
   *
   * @param tasks The array of IDBTask objects to be converted.
   * @returns {IResponseTaskDTO[]} The array of converted IResponseTaskDTO objects.
   */
  static toListDTO(tasks: IDBTask[]): IResponseTaskDTO[] {
    return tasks.map((task) => TaskResponseDTOMapper.toDTO(task));
  }
}

export default TaskResponseDTOMapper;
