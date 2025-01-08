import { IFieldValidationError } from "../interfaces/IFieldValidationError";
import { CustomError } from "./customError";
import { ErrorMessages } from "./errorMessages";

export const throwCustomError = (name: string, meta?: IFieldValidationError[]) => {
  const { message, status } = ErrorMessages[name];
  const customError = CustomError.create({ message, status, name, meta });

  throw customError;
};
