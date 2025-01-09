import { z } from "zod";
import { throwCustomError } from "../helpers/throwCustomError";
import { ErrorNames } from "../helpers/errorNames";
import { formatZodErrors } from "../utils/formatZodErrors";
import { mongoUriZodSchema } from "./mongoUriZodSchema";

const envBaseZodSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.preprocess((val) => Number(val), z.number().min(1)),
  CLIENT_URL: z.string().url(),
  API_URL: z.string().url(),
  API_VERSION: z.string(),
});

const envCombinedZodSchema = envBaseZodSchema.merge(mongoUriZodSchema);

export const envStrictZodSchema = envCombinedZodSchema.catch((def) => {
  return throwCustomError(ErrorNames.INVALID_ENVIRONMENT_VARIABLES, formatZodErrors(def.error));
});
