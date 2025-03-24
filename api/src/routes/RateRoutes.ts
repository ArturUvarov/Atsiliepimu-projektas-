import express from "express";
import { index } from "../controllers/RateControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
