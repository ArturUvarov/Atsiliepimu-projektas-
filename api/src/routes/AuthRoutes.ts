import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

// Register route
router.post('/signup', (req, res, next) => {
    AuthController.register(req, res, next);
  });

export default router;