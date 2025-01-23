import { ITask } from "@/interfaces/ITask";

type ExcludedProperties = "createdAt" | "updatedAt" | "completed" | "id";

type ICreateTaskDTO = Omit<ITask, ExcludedProperties>;

export default ICreateTaskDTO;
