import IDBTask from "../interfaces/IDBTask";

type ExcludedProperties = "createdAt" | "updatedAt" | "id" | "userId";

type IUpdateTaskDTO = Omit<Partial<IDBTask>, ExcludedProperties>;

export default IUpdateTaskDTO;
