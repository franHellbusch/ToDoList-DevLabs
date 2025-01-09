import cors from "cors";
import config from "./shared/config/config";
import express from "express";
import App from "./app";
import morgan from "morgan";
import { errorHandlerMiddleware } from "./shared/middlewares/errorHandlerMiddleware";

const appInit = () => {
  return new App({
    middlewares: [
      cors(config.cors),
      express.json(),
      express.urlencoded({ extended: true }),
      morgan("dev"),
    ],
    errorHandler: errorHandlerMiddleware,
  });
};

export default appInit();
