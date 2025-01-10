import IDBToDo from "../interfaces/IDBToDo";

type ExcludedProperties = "createdAt" | "updatedAt" | "id";

interface IUpdateToDoDTO extends Omit<Partial<IDBToDo>, ExcludedProperties> {}

export default IUpdateToDoDTO;
