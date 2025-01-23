import mongoose from "mongoose";
import { MongoConnect } from "../../../api/shared/db/mongodb/connection";
import { taskContainer } from "../../../api/modules/tasks/dependencies";
import { ITaskRepository } from "../../../api/modules/tasks/interfaces/ITaskRepository";
import TASK_TYPES from "../../../api/modules/tasks/types/taskTypes";
import ICreateTaskDTO from "../../../api/modules/tasks/dtos/ICreateTaskDTO";
import { Priority } from "../../../api/modules/tasks/types/Priority";

// Arrange (Setup test data)
const newTask: ICreateTaskDTO = {
  title: "Test Task",
  description: "This is a test task",
  dueDate: new Date(),
  priority: Priority.LOW,
};

const userId = "testUserId";

describe("TaskRepository", () => {
  let taskRepository: ITaskRepository;

  beforeAll(async () => {
    await MongoConnect();
    taskRepository = taskContainer.get<ITaskRepository>(TASK_TYPES.TaskRepository);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should create a new task in the database", async () => {
    const createdTask = await taskRepository.createOne(newTask, userId);

    expect(createdTask).toHaveProperty("id");
    expect(createdTask.title).toBe(newTask.title);
    expect(createdTask.description).toBe(newTask.description);
    expect(createdTask.dueDate).toEqual(newTask.dueDate);
    expect(createdTask.priority).toBe(newTask.priority);
    expect(createdTask.userId).toBe(userId);
    expect(createdTask.completed).toBeFalsy();
  });
});
