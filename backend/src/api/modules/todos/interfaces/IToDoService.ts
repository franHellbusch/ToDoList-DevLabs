import ICreateToDoDTO from "../dtos/ICreateToDoDTO";
import IUpdateToDoDTO from "../dtos/IUpdateToDoDTO";
import IDBToDo from "./IDBToDo";

export interface IToDoService {
  getAllToDos(): Promise<IDBToDo[]>;
  getToDoById(id: string): Promise<IDBToDo>;
  createToDo(todo: ICreateToDoDTO): Promise<IDBToDo>;
  updateToDoById(id: string, updatedInfo: IUpdateToDoDTO): Promise<IDBToDo>;
  deleteToDoById(id: string): Promise<void>;
}
