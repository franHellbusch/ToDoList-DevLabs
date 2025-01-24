import config from "@/config/config";
import ICreateTaskDTO from "@/dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "@/dtos/IUpdateTaskDTO";
import { ITask } from "@/interfaces/ITask";
import axios from "axios";

// Fetches all tasks from the API.
export const getAllTasks = async (): Promise<ITask[]> => {
  const response = await axios.get(`${config.apiUrl}/tasks`);
  return response.data.payload;
};

// Fetches a specific task by its ID from the API.
export const getById = async (id: string): Promise<ITask> => {
  const response = await axios.get(`${config.apiUrl}/tasks/${id}`);
  return response.data.payload;
};

// Creates a new task and sends it to the API.
export const createTask = async (task: ICreateTaskDTO): Promise<ITask> => {
  const response = await axios.post(`${config.apiUrl}/tasks`, task);
  return response.data.payload;
};

// Updates an existing task in the API.
export const updateTask = async (
  id: string,
  updatedInfo: IUpdateTaskDTO,
): Promise<ITask> => {
  const response = await axios.put(`${config.apiUrl}/tasks/${id}`, updatedInfo);
  return response.data.payload;
};

// Deletes a task from the API.
export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${config.apiUrl}/tasks/${id}`);
};
