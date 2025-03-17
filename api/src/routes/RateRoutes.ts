import express from "express";
import { getRate } from "../controllers/RateControllerApi";

const router = express.Router();

router.get("/rate", getRate);

export default router;
