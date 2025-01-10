import { IFieldValidationError } from "../interfaces/IFieldValidationError";
import { createCustomError } from "./createCustomError";

export const throwCustomError = (name: string, fields?: IFieldValidationError[]) => {
  throw createCustomError(name, fields);
};
