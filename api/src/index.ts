import express, { Express, Request, Response } from "express";
// import db from "./db";
// import { User } from "./db/schema";
import UserRoutes from "./routes/UserRoutes";
import TagRoutes from "./routes/TagRoutes";
import SubjectRoutes from "./routes/SubjectRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import RateRoutes from "./routes/RateRoutes";
import SubjectTagRoutes from "./routes/SubjectTagRoutes";
import ReviewRoutes from "./routes/ReviewRoutes";
import ChatRoutes from "./routes/ChatRoutes";
// import { User } from "./db/schema";
// import { Subject } from "./db/schema";
// import { Tag } from "./db/schema";
// import { SubjectTag } from "./db/schema";
// import { Reviews } from "./db/schema";
// import { Comment } from "./db/schema";
// import { Rate } from "./db/schema";

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

app.use("/api", UserRoutes);

app.use("/api", TagRoutes);

app.use("/api", SubjectRoutes);

app.use("/api", CommentRoutes);

app.use("/api", RateRoutes);

app.use("/api", SubjectTagRoutes);

app.use("/api", ReviewRoutes);

app.use("/api", ChatRoutes);

// app.get("/api/Subject", async (req: Request, res: Response) => {
//   let subjects = await db.select().from(Subject);
//   res.json(subjects);
// });

// app.get("/api/Tag", async (req: Request, res: Response) => {
//   let tags = await db.select().from(Tag);
//   res.json(tags);
// });

// app.get("/api/SubjectTag", async (req: Request, res: Response) => {
//   let subjectTags = await db.select().from(SubjectTag);
//   res.json(subjectTags);
// });

// app.get("/api/reviews", async (req: Request, res: Response) => {
//   let reviews = await db.select().from(Reviews);
//   res.json(reviews);
// });

// app.get("/api/comment", async (req: Request, res: Response) => {
//   let comments = await db.select().from(Comment);
//   res.json(comments);
// });

// app.get("/api/rate", async (req: Request, res: Response) => {
//   let rates = await db.select().from(Rate);
//   res.json(rates);
// });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});

console.log(
  "OpenAI API Key:",
  process.env.OPENAI_API_KEY ? "Exists" : "Missing"
);
