import { ErrorNames } from "./errorNames";
import httpStatus from "http-status";

export const ErrorMessages = {
  [ErrorNames.INTERNAL_SERVER_ERROR]: {
    message: "Internal Server Error",
    status: httpStatus.INTERNAL_SERVER_ERROR,
  },
  [ErrorNames.UNAUTHORIZED]: {
    message: "Unauthorized Access: Access Denied. Please log in or contact the administrator",
    status: httpStatus.UNAUTHORIZED,
  },
  [ErrorNames.MISSING_PATHS]: {
    message: "Bad Request: Some required fields are missing",
    status: httpStatus.BAD_REQUEST,
  },
  [ErrorNames.INVALID_FIELDS]: {
    message: "Bad Request: There are some invalid fields",
    status: httpStatus.BAD_REQUEST,
  },
  [ErrorNames.NOT_FOUND]: {
    message: "Bad Request: Not found",
    status: httpStatus.NOT_FOUND,
  },
  [ErrorNames.INVALID_ENVIRONMENT_VARIABLES]: {
    message: "Invalid Environment Variables",
    status: httpStatus.BAD_REQUEST,
  },
};
