import { z } from "zod";
import { Priority } from "../types/Priority";
import { ErrorNames } from "../../../shared/helpers/errorNames";
import { formatZodErrors } from "../../../shared/utils/formatZodErrors";
import { createCustomError } from "../../../shared/helpers/createCustomError";

const taskBaseSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional().nullable(),
  completed: z.boolean().default(false),
  dueDate: z.coerce.date(),
  priority: z.enum([Priority.LOW, ...Object.values(Priority)]),
});

export const taskStrictZodSchema = taskBaseSchema.catch((def) => {
  throw createCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});

export const taskPartialZodSchema = taskBaseSchema.partial().catch((def) => {
  throw createCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});
