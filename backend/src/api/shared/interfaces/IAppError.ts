import { IFieldValidationError } from "./IFieldValidationError";

export interface IAppError {
  message: string;
  name: string;
  status: number;
  fields?: IFieldValidationError[];
}
