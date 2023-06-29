import { Router } from "express";
import { createCoupons, getCoupons } from "../controllers/index.js";

const router = Router();

router.get("/", getCoupons);

router.post("/create", createCoupons);

export default router;
