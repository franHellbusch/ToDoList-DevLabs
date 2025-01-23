import { Dayjs } from "dayjs";

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITask {
  id: string;
  title: string;
  description?: string | null;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | Dayjs;
  priority: Priority;
}
