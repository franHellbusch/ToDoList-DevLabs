import cors from "cors";
import config from "./shared/config/config";
import express from "express";
import App from "./app";
import morgan from "morgan";
import { errorHandlerMiddleware } from "./shared/middlewares/errorHandlerMiddleware";
import toDoRouter from "./modules/tasks/dependencies";
import healthRouter from "./modules/health/dependencies";

/**
 * Initializes the application by creating an instance of the App class
 * and configuring it with necessary middlewares, routes, and the error handler.
 *
 * @returns An instance of the initialized App class.
 */
const appInit = () => {
  return new App({
    routes: [healthRouter.getRouter(), toDoRouter.getRouter()],
    middlewares: [
      cors(config.cors),
      express.json(),
      express.urlencoded({ extended: true }),
      morgan(config.morgan.format),
    ],
    errorHandler: errorHandlerMiddleware,
  });
};

export default appInit();
