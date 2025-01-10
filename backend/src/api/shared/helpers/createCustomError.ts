import { IFieldValidationError } from "../interfaces/IFieldValidationError";
import { CustomError } from "./customError";
import { ErrorMessages } from "./errorMessages";

export const createCustomError = (name: string, fields?: IFieldValidationError[]) => {
  const { message, status } = ErrorMessages[name];
  const customError = CustomError.create({ message, status, name, fields });

  return customError;
};
