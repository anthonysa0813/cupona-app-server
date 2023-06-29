import express from "express";
import CouponRouter from "../routes/coupon.js";
import UserRouter from "../routes/user.js";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "../database/config.js";

export class Server {
  // es la funcion que se invoca cuando la clase es instanciada
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5051;
    this.paths = {
      ping: "/api/v1/ping",
      cupon: "/api/v1/cupon",
      user: "/api/v1/user",
    };
    this.middleware();
    this.connectMongo();
    this.routes();
  }

  middleware() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
  }

  async connectMongo() {
    await connectDB();
  }

  routes() {
    this.app.use(this.paths.cupon, CouponRouter); // middleware
    this.app.use(this.paths.user, UserRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}
