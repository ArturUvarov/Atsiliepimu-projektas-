import express from "express";
import { index } from "../controllers/SubjectTagControllerApi";

const router = express.Router();

router.get("/", index);

export default router;
