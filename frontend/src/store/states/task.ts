import { ITask } from "@/interfaces/ITask";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (_state, action) => action.payload,
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateOneTask: (state, action) => {
      const { id, ...updatedData } = action.payload;
      return state.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task,
      );
    },
    deleteOneTask: (state, action) =>
      state.filter((task) => task.id != action.payload),
  },
});

export const { setTasks, addTask, updateOneTask, deleteOneTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
