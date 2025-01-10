import { inject, injectable } from "inversify";
import { IToDoService } from "../interfaces/IToDoService";
import TODO_TYPES from "../types/toDoTypes";
import { IToDoRepository } from "../interfaces/IToDoRepository";
import IDBToDo from "../interfaces/IDBToDo";
import { toDoPartialZodSchema, toDoStrictZodSchema } from "../schemas/toDoZodSchema";
import ICreateToDoDTO from "../dtos/ICreateToDoDTO";
import IUpdateToDoDTO from "../dtos/IUpdateToDoDTO";
import { throwCustomError } from "../../../shared/helpers/throwCustomError";
import { ErrorNames } from "../../../shared/helpers/errorNames";

@injectable()
class ToDoService implements IToDoService {
  constructor(
    @inject(TODO_TYPES.ToDoRepository) private readonly toDoRepository: IToDoRepository
  ) {}

  async getAllToDos(): Promise<IDBToDo[]> {
    return this.toDoRepository.getAll();
  }

  async getToDoById(id: string): Promise<IDBToDo> {
    const toDo = await this.toDoRepository.getById(id);

    if (!toDo) {
      return throwCustomError(ErrorNames.NOT_FOUND);
    }

    return toDo;
  }

  async createToDo(todo: ICreateToDoDTO): Promise<IDBToDo> {
    const parsedUserData = toDoStrictZodSchema.parse(todo);

    const newToDo = await this.toDoRepository.create(parsedUserData);

    return newToDo;
  }

  async updateToDoById(id: string, updatedInfo: IUpdateToDoDTO): Promise<IDBToDo> {
    const parseUpdatedInfo = toDoPartialZodSchema.parse(updatedInfo);

    const toDo = await this.toDoRepository.getById(id);

    if (!toDo) {
      return throwCustomError(ErrorNames.NOT_FOUND);
    }

    const updatedUser = await this.toDoRepository.updateById(id, parseUpdatedInfo);

    return updatedUser;
  }

  async deleteToDoById(id: string): Promise<void> {
    const toDo = await this.toDoRepository.getById(id);

    if (!toDo) {
      return throwCustomError(ErrorNames.NOT_FOUND);
    }

    this.toDoRepository.deleteById(id);
  }
}

export default ToDoService;
