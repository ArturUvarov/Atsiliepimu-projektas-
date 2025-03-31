import express, { Express, Request, Response } from "express";
import UserRoutes from "./routes/UserRoutes";
import TagRoutes from "./routes/TagRoutes";
import SubjectRoutes from "./routes/SubjectRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import RateRoutes from "./routes/RateRoutes";
import SubjectTagRoutes from "./routes/SubjectTagRoutes";
import ReviewRoutes from "./routes/ReviewRoutes";
import ChatRoutes from "./routes/ChatRoutes";

import cors from "cors";
import dotenv from "dotenv";
const app: Express = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Route to check if API is working
app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

app.use("/api/users", UserRoutes);

app.use("/api/tags", TagRoutes);

app.use("/api/subjects", SubjectRoutes);

app.use("/api/comments", CommentRoutes);

app.use("/api/rates", RateRoutes);

app.use("/api/subjecttags", SubjectTagRoutes);

app.use("/api/reviews", ReviewRoutes);

app.use("/api", ChatRoutes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
