import { ITask } from "@/interfaces/ITask";
import { createContext, useContext } from "react";

// Defines available modes for the modal.
export enum modalModes {
  CREATE_TASK = "createTask",
  UPDATE_TASK = "updateTask",
}

export interface ModalState {
  isOpen: boolean;
  mode: modalModes;
  selectedTask?: ITask | null;
}

export interface ModalContextData extends ModalState {
  hideModal: () => void;
  showCreateTaskModal: () => void;
  showUpdateTaskModal: (selectedTask: ITask) => void;
}

export const ModalContext = createContext<ModalContextData>({
  isOpen: false,
  mode: modalModes.CREATE_TASK,
  selectedTask: null,
  hideModal: () => {},
  showCreateTaskModal: () => {},
  showUpdateTaskModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
