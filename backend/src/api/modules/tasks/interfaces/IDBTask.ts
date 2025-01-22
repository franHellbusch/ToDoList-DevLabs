import { Priority } from "../types/Priority";

interface IDBTask {
  id: string;
  title: string;
  description?: string | null;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
  priority: Priority;
  userId: string;
}

export default IDBTask;
