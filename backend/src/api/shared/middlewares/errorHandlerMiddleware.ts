import { Response, Request, ErrorRequestHandler, NextFunction } from "express";
import { logger } from "../utils/logger";
import { CustomError } from "../helpers/customError";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err);

  const { message, status, name, fields } = CustomError.create(err);

  res.status(status).json({
    success: false,
    error: { name, message, status, fields },
  });
};
