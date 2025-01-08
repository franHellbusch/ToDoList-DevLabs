import { pino } from "pino";
import PinoHttp from "pino-http";

const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "yyyy-dd-mm, h:MM:ss TT",
      },
    },
  ],
});

export const logger = pino(transport);

export const loggerMiddleware = PinoHttp({
  logger,
  autoLogging: false,
});
