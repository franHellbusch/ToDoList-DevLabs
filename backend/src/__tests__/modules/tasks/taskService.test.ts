import ICreateTaskDTO from "../../../api/modules/tasks/dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../../api/modules/tasks/interfaces/ITaskRepository";
import TaskService from "../../../api/modules/tasks/services/taskService";
import { Priority } from "../../../api/modules/tasks/types/Priority";
import { CustomError } from "../../../api/shared/helpers/customError";
import { ErrorNames } from "../../../api/shared/helpers/errorNames";
import { Mock, mock } from "ts-jest-mocker";

// Arrange (Setup test data)
const newTask: ICreateTaskDTO = {
  title: "Test Task",
  description: "This is a test task",
  dueDate: new Date(),
  priority: Priority.LOW,
};

const userId = "testUserId";

const existingTask = {
  id: "123",
  userId,
  ...newTask,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("TaskService", () => {
  let taskService: TaskService;
  let taskRepositoryMock: Mock<ITaskRepository>;

  beforeEach(() => {
    taskRepositoryMock = mock<ITaskRepository>();
    taskService = new TaskService(taskRepositoryMock);
  });

  describe("createOneTask", () => {
    it("creates a new task successfully", async () => {
      taskRepositoryMock.createOne.mockResolvedValue(existingTask);

      // Call the function under test
      const createdTask = await taskService.createOneTask(newTask, userId);

      // Assert (verify the results)
      expect(createdTask).toEqual(existingTask);
    });

    it("throws an error for missing required fields in the new task", async () => {
      // Arrange
      const newTask: Partial<ICreateTaskDTO> = {}; // Missing required fields

      // Attempt to create task with invalid data
      try {
        await taskService.createOneTask(newTask as ICreateTaskDTO, "userId");
        fail("Expected an error to be thrown");
      } catch (error: any) {
        // Assert
        expect(error).toBeInstanceOf(CustomError);
        expect(error.name).toEqual(ErrorNames.INVALID_FIELDS);
      }
    });

    it("throws an error if the task repository throws an error", async () => {
      const errorMessage = "Database error";

      taskRepositoryMock.createOne.mockRejectedValue(new Error(errorMessage));

      // Attempt to create task with failing repository
      try {
        await taskService.createOneTask(newTask, userId);
        fail("Expected an error to be thrown");
      } catch (error: any) {
        // Assert
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain(errorMessage);
      }
    });
  });
});
