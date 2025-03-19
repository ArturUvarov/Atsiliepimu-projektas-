import express from "express";
import { index } from "../controllers/ReviewControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
