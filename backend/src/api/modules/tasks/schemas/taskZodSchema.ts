import { z } from "zod";
import { Priority } from "../types/Priority";
import { ErrorNames } from "../../../shared/helpers/errorNames";
import { formatZodErrors } from "../../../shared/utils/formatZodErrors";
import { createCustomError } from "../../../shared/helpers/createCustomError";

/**
 * Defines the schema for validating core task data using Zod.
 */
const taskBaseSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional().nullable(),
  completed: z.boolean().default(false),
  dueDate: z.coerce.date(),
  priority: z.enum([Priority.LOW, ...Object.values(Priority)]),
});

/**
 * Strict Zod schema for validating complete task data.
 */
export const taskStrictZodSchema = taskBaseSchema.catch((def) => {
  throw createCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});

/**
 * Partial Zod schema for validating partial task data.
 */
export const taskPartialZodSchema = taskBaseSchema.partial().catch((def) => {
  throw createCustomError(ErrorNames.INVALID_FIELDS, formatZodErrors(def.error));
});
