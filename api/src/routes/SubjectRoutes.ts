import express from "express";
import { getSubjects } from "../controllers/SubjectControllerApi";

const router = express.Router();

router.get("/subjects", getSubjects);

export default router;
