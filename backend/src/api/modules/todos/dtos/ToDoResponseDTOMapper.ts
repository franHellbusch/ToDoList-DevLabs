import IDBToDo from "../interfaces/IDBToDo";
import { IResponseToDoDTO } from "./IResponseToDoDTO";

class ToDoResponseDTOMapper {
  static toDTO(toDo: IDBToDo): IResponseToDoDTO {
    const toDoData: IResponseToDoDTO = {
      id: toDo.id,
      title: toDo.title,
      description: toDo.description,
      completed: toDo.completed,
      updatedAt: toDo.updatedAt,
      createdAt: toDo.createdAt,
      dueDate: toDo.dueDate,
      priority: toDo.priority,
    };

    return toDoData;
  }

  static toListDTO(toDos: IDBToDo[]): IResponseToDoDTO[] {
    return toDos.map((toDo) => ToDoResponseDTOMapper.toDTO(toDo));
  }
}

export default ToDoResponseDTOMapper;
