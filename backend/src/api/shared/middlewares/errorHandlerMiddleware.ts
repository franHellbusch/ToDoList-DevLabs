import { Response, Request, ErrorRequestHandler, NextFunction } from "express";
import { logger } from "../utils/logger";
import { CustomError } from "../helpers/customError";
import { IAppError } from "../interfaces/IAppError";
import { createCustomError } from "../helpers/createCustomError";
import { ErrorNames } from "../helpers/errorNames";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err: IAppError | any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const shouldLog = err.status && err.status >= 500;

  if (shouldLog) {
    logger.error(err);
  }

  const { message, status, name, fields } =
    err.name == "UnauthorizedError" || err.name == "InvalidTokenError"
      ? createCustomError(ErrorNames.UNAUTHORIZED)
      : CustomError.create(err);

  res.status(status).json({
    success: false,
    error: { name, message, status, fields },
  });
};
