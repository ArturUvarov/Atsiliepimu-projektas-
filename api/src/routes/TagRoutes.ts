import express from "express";
import { index } from "../controllers/TagControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
