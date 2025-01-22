import { createCustomError } from "./createCustomError";
import { CustomError } from "./customError";
import { ErrorNames } from "./errorNames";

export const catchAndCreateMongoError = (err: any) => {
  switch (true) {
    case err.code === 11000:
      return createCustomError(ErrorNames.DUPLICATE_KEY);
    case err.name === "ValidationError":
      return createCustomError(ErrorNames.MISSING_PATHS);
    case err.name === "CastError" && err.path == "_id":
      return createCustomError(ErrorNames.WRONG_ID_FORMAT);
    default:
      return CustomError.create(err);
  }
};
