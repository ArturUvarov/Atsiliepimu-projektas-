import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

// Register route
router.post("/signup", (req, res, next) => {
  AuthController.register(req, res, next);
});

<<<<<<< HEAD
router.post("/signin", async (req, res, next) => {
  try {
    await AuthController.login(req, res, next);
  } catch (error) {
    console.error("Error in /signin route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;
=======
  router.post('/signin', async (req, res, next) => {
    try {
        await AuthController.login(req, res, next);
    } catch (error) {
        console.error("Error in /signin route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export default router;
>>>>>>> 8e4e87ecc35e92749ae5bcd8b1b649afae3d4745
