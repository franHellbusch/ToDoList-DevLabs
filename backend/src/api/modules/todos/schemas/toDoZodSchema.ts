import { z } from "zod";
import { Priority } from "../types/Priority";
import { throwCustomError } from "../../../shared/helpers/throwCustomError";
import { ErrorNames } from "../../../shared/helpers/errorNames";
import { formatZodErrors } from "../../../shared/utils/formatZodErrors";

const toDoBaseSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional().nullable(),
  completed: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  dueDate: z.date().optional().nullable(),
  priority: z.enum([Priority.LOW, ...Object.values(Priority)]),
});

export const toDoStrictZodSchema = toDoBaseSchema.catch((def) => {
  return throwCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});

export const toDoPartialZodSchema = toDoBaseSchema.partial().catch((def) => {
  return throwCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});
