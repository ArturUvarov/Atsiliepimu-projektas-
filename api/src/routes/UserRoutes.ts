import express from "express";
import { getUsers } from "../controllers/UserControllerApi";

const router = express.Router();

router.get("/users", getUsers);

export default router;
