import { inject, injectable } from "inversify";
import TODO_TYPES from "../types/toDoTypes";
import { IToDoService } from "../interfaces/IToDoService";
import { NextFunction, Request, Response } from "express";
import ToDoResponseDTOMapper from "../dtos/ToDoResponseDTOMapper";

@injectable()
class ToDoController {
  constructor(@inject(TODO_TYPES.ToDoService) private readonly toDoService: IToDoService) {}

  async getAllToDos(_req: Request, res: Response, _next: NextFunction) {
    const toDoList = await this.toDoService.getAllToDos();

    res.status(200).json({
      success: true,
      payload: ToDoResponseDTOMapper.toListDTO(toDoList),
    });
  }

  async getToDoById(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const toDo = await this.toDoService.getToDoById(id);

    res.status(200).json({
      success: true,
      payload: ToDoResponseDTOMapper.toDTO(toDo),
    });
  }

  async createToDo(req: Request, res: Response, _next: NextFunction) {
    const toDo = await this.toDoService.createToDo(req.body);

    res.status(201).json({
      success: true,
      payload: ToDoResponseDTOMapper.toDTO(toDo),
    });
  }

  async updateToDoById(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const toDo = await this.toDoService.updateToDoById(id, req.body);

    res.status(200).json({
      success: true,
      payload: ToDoResponseDTOMapper.toDTO(toDo),
    });
  }

  async deleteToDoById(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    await this.toDoService.deleteToDoById(id);

    res.status(204).json({
      success: true,
    });
  }
}

export default ToDoController;
