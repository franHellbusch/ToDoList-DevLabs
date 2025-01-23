import IDBTask from "../interfaces/IDBTask";

type ExcludedProperties = "userId";

export interface IResponseTaskDTO extends Omit<Partial<IDBTask>, ExcludedProperties> {}
