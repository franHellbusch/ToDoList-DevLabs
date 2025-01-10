import IDBToDo from "../interfaces/IDBToDo";

type ExcludedProperties = "createdAt" | "updatedAt" | "completed" | "id";

interface ICreateToDoDTO extends Omit<IDBToDo, ExcludedProperties> {}

export default ICreateToDoDTO;
