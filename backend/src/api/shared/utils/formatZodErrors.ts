import { z } from "zod";
import { IFieldValidationError } from "../interfaces/IFieldValidationError";

export function formatZodErrors(errors: z.ZodError): IFieldValidationError[] {
  const formattedErrors: IFieldValidationError[] = [];

  errors.errors.forEach((issue) => {
    const field = issue.path[0];
    const existingError = formattedErrors.find((error) => error.field === field);

    if (existingError) {
      existingError.messages.push(issue.message);
    } else {
      formattedErrors.push({
        field,
        messages: [issue.message],
      });
    }
  });

  return formattedErrors;
}
