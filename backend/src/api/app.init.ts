import cors from "cors";
import config from "./shared/config/config";
import express from "express";
import { loggerMiddleware } from "./shared/utils/logger";
import App from "./app";

const appInit = () => {
  return new App({
    middlewares: [
      cors(config.cors),
      express.json(),
      express.urlencoded({ extended: true }),
      loggerMiddleware,
    ],
  });
};

export default appInit();
