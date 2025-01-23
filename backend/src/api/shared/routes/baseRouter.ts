import { Request, Response, NextFunction, Router, Handler } from "express";

class BaseRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  initRoutes(): void {}

  getRouter() {
    return this.router;
  }

  get(path: string, ...callbacks: Handler[]) {
    this.router.get(path, this.applyCallbacks(callbacks));
  }

  post(path: string, ...callbacks: Handler[]) {
    this.router.post(path, this.applyCallbacks(callbacks));
  }

  put(path: string, ...callbacks: Handler[]) {
    this.router.put(path, this.applyCallbacks(callbacks));
  }

  delete(path: string, ...callbacks: Handler[]) {
    this.router.delete(path, this.applyCallbacks(callbacks));
  }

  private applyCallbacks(callbacks: Handler[]): Handler[] {
    return callbacks.map((callback) => async (...params: [Request, Response, NextFunction]) => {
      try {
        await callback.apply(this, [...params]);
      } catch (error) {
        (params[2] as NextFunction)(error);
      }
    });
  }
}

export default BaseRouter;
