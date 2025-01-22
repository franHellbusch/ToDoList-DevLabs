import config from "@/config/config";
import ICreateTaskDTO from "@/dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "@/dtos/IUpdateTaskDTO";
import { ITask } from "@/interfaces/ITask";
import axios from "axios";

export const getAllTasks = async (): Promise<ITask[]> => {
  const response = await axios.get(`${config.apiUrl}/tasks`);
  return response.data.payload;
};

export const getById = async (id: string): Promise<ITask> => {
  const response = await axios.get(`${config.apiUrl}/tasks/${id}`);
  return response.data.payload;
};

export const createTask = async (task: ICreateTaskDTO): Promise<ITask> => {
  const response = await axios.post(`${config.apiUrl}/tasks`, task);
  return response.data.payload;
};

export const updateTask = async (
  id: string,
  updatedInfo: IUpdateTaskDTO,
): Promise<ITask> => {
  const response = await axios.put(`${config.apiUrl}/tasks/${id}`, updatedInfo);
  return response.data.payload;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${config.apiUrl}/tasks/${id}`);
};
