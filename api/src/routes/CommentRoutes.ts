import express from "express";
import { getComments } from "../controllers/CommentControllerApi";

const router = express.Router();

router.get("/comment", getComments);

export default router;
