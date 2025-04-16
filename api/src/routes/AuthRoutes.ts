import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/signup", (req, res, next) => {
  AuthController.register(req, res, next);
});

router.post("/signin", async (req, res, next) => {
  try {
    await AuthController.login(req, res, next);
  } catch (error) {
    console.error("Error in /signin route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/profile", async (req, res, next) => {
  try {
    await AuthController.getProfile(req, res);
  } catch (error) {
    next(error);
  }
});
router.put("/profile", (req, res, next) => {
  AuthController.updateProfile(req, res).catch(next);
});

export default router;
