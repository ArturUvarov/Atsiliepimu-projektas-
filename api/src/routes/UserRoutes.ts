import express from "express";
import { index } from "../controllers/UserControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
