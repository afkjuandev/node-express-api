import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";
import { env } from "./config/env";

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandlers();
  }

  private middlewares(): void {
    this.app.use(express.json());
    if (env.NODE_ENV !== "test") {
      this.app.use(morgan("dev"));
    }
  }

  private routes(): void {
    this.app.use(routes);
  }

  private errorHandlers(): void {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }
}

export default new App().app;
