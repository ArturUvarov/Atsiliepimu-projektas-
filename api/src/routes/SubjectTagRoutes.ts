import express from "express";
import { getSubjectTag } from "../controllers/SubjectTagControllerApi";

const router = express.Router();

router.get("/subjecttag", getSubjectTag);

export default router;
