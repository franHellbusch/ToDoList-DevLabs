import ICreateToDoDTO from "../dtos/ICreateToDoDTO";
import IUpdateToDoDTO from "../dtos/IUpdateToDoDTO";
import IDBToDo from "./IDBToDo";

export interface IToDoRepository {
  getAll(): Promise<IDBToDo[]>;
  getById(id: string): Promise<IDBToDo | null>;
  create(todo: ICreateToDoDTO): Promise<IDBToDo>;
  updateById(id: string, updatedInfo: IUpdateToDoDTO): Promise<IDBToDo>;
  deleteById(id: string): Promise<void>;
}
