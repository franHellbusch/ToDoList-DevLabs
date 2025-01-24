import { inject, injectable } from "inversify";
import BaseRouter from "../../../shared/routes/baseRouter";
import HEALTH_TYPES from "../types/HealthTypes";
import HealthController from "../controllers/HealthController";

/**
 * Health router for the application.
 * Handles health check requests.
 */
@injectable()
class HealthRouter extends BaseRouter {
  constructor(
    @inject(HEALTH_TYPES.HealthController) private readonly healthController: HealthController
  ) {
    super();
  }

  /**
   * Initializes health check route.
   */
  initRoutes(): void {
    this.get("/health", (...params) => this.healthController.getHealthMessage(...params));
  }
}

export default HealthRouter;
