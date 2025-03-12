import express from "express";
import { getTags } from "../controllers/TagControllerApi";

const router = express.Router();

router.get("/tags", getTags);

export default router;
