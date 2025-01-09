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
  mongo: {
    URI: parsedEnv.MONGO_URI || "127.0.0.1:27017",
    DB_NAME: parsedEnv.MONGO_DB_NAME || "todolist",
    USER: parsedEnv.MONGO_USER,
    PASSWORD: parsedEnv.MONGO_PASSWORD,
    HOST: parsedEnv.MONGO_HOST,
    QUERY: parsedEnv.MONGO_QUERY,
  },
  auth0: {
    AUDIENCE: parsedEnv.AUTH0_AUDIENCE,
    ISSUER_BASE_URL: parsedEnv.AUTH0_ISSUER_BASE_URL,
    TOKEN_SIGNING_ALG: parsedEnv.AUTH0_TOKEN_SIGNING_ALG,
  },
};

export default config;
