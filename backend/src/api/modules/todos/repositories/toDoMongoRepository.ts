import { toDoModel } from "../models/toDoModel";
import { IDBMongoToDo } from "../interfaces/IDBMongoToDo";
import { IToDoRepository } from "../interfaces/IToDoRepository";
import { BaseMongoRepository } from "../../../shared/repositories/baseMongoRepository";

class ToDoMongoRepository extends BaseMongoRepository<IDBMongoToDo> implements IToDoRepository {
  constructor() {
    super(toDoModel);
  }
}

export default ToDoMongoRepository;
