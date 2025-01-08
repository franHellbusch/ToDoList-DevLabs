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
  [ErrorNames.DUPLICATE_KEY]: {
    message: "Some field with a unique value are in use.",
    status: httpStatus.CONFLICT,
  },
  [ErrorNames.FORBIDDEN]: {
    message: "Forbidden: You do not have permission to access this resource",
    status: httpStatus.FORBIDDEN,
  },
  [ErrorNames.EXISTING_ACCOUNT]: {
    message: "Conflict: These credentials are already in use.",
    status: httpStatus.CONFLICT,
  },
  [ErrorNames.INVALID_ENVIRONMENT_VARIABLES]: {
    message: "Invalid Environment Variables",
    status: httpStatus.BAD_REQUEST,
  },
};
