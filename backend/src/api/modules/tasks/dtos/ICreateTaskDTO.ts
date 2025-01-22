import IDBTask from "../interfaces/IDBTask";

type ExcludedProperties = "createdAt" | "updatedAt" | "completed" | "id" | "userId";

type ICreateTaskDTO = Omit<IDBTask, ExcludedProperties>;

export default ICreateTaskDTO;
