/**
 * Symbols for dependency injection.
 */
const TASK_TYPES = {
  TaskController: Symbol("TaskController"),
  TaskRouter: Symbol("TaskRouter"),
  TaskService: Symbol("TaskService"),
  TaskRepository: Symbol("TaskRepository"),
};

export default TASK_TYPES;
