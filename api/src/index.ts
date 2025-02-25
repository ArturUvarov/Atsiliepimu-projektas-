import express, { Express, Request, Response } from "express";
import db from "./db";
import { User, Comment, Subject, SubjectTag, Tag, Rate } from "./db/schema";
import cors from "cors";
const app: Express = express();
app.use(cors());
app.use(express.json());
app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});
app.get("/api/users", async (req: Request, res: Response) => {
  let users = await db.select().from(User);
  res.json(users);
});
app.get("/api/comment", async (req: Request, res: Response) => {
  let comment = await db.select().from(Comment);
  res.json(comment);
});
app.get("/api/subject", async (req: Request, res: Response) => {
  let subject = await db.select().from(Subject);
  res.json(subject);
});
app.get("/api/tag", async (req: Request, res: Response) => {
  let tag = await db.select().from(Tag);
  res.json(tag);
});
app.get("/api/subjectTag", async (req: Request, res: Response) => {
  let subjectTag = await db.select().from(SubjectTag);
  res.json(subjectTag);
});
app.get("/api/rate", async (req: Request, res: Response) => {
  let rate = await db.select().from(Rate);
  res.json(rate);
});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
