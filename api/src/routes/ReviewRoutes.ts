import express from "express";
import { getReview } from "../controllers/ReviewControllerApi";

const router = express.Router();

router.get("/review", getReview);

export default router;
