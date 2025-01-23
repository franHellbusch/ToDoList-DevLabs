import { z } from "zod";

/**
 * Defines the Zod schema for validating Auth0 configuration environment variables.
 */
export const auth0ConfigZodSchema = z.object({
  AUTH0_AUDIENCE: z.string().url(),
  AUTH0_ISSUER_BASE_URL: z.string().url(),
  AUTH0_TOKEN_SIGNING_ALG: z.string(),
});
