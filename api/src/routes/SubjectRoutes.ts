import express from "express";
import { index } from "../controllers/SubjectControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
