import { ITask } from "@/interfaces/ITask";

type ExcludedProperties = "createdAt" | "updatedAt" | "id";

type IUpdateTaskDTO = Omit<Partial<ITask>, ExcludedProperties>;

export default IUpdateTaskDTO;
