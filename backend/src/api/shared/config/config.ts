import "dotenv/config";
import { envStrictZodSchema } from "../schemas/envZodSchema";

const parsedEnv = envStrictZodSchema.parse(process.env);

const config = {
  globals: {
    ENV: parsedEnv.NODE_ENV,
    PORT: Number(parsedEnv.PORT),
  },
  cors: {
    origin: parsedEnv.CLIENT_URL,
    credentials: true,
  },
  server: {
    gretting: () =>
      `Server up and running on ${parsedEnv.API_URL || "http://localhost:8080"} in ${
        parsedEnv.NODE_ENV || "development"
      } environment`,
    API_URL: parsedEnv.API_URL || "http://localhost:8080",
    apiVersion: parsedEnv.API_VERSION ? `api/${parsedEnv.API_VERSION}` : "/api",
  },
};

export default config;
