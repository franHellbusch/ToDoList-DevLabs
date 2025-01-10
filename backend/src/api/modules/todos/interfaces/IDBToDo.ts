import { Priority } from "../types/Priority";

interface IDBToDo {
  id: string;
  title: string;
  description?: string | null;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date | null;
  priority: Priority;
}

export default IDBToDo;
