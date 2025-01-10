import { Container } from "inversify";
import HEALTH_TYPES from "./types/HealthTypes";
import HealthController from "./controllers/HealthController";
import HealthRouter from "./routes/HealthRouter";

const container = new Container();

container.bind<HealthController>(HEALTH_TYPES.HealthController).to(HealthController);
container.bind<HealthRouter>(HEALTH_TYPES.HealthRouter).to(HealthRouter);

const healthRouter = container.get<HealthRouter>(HEALTH_TYPES.HealthRouter);

export default healthRouter;
