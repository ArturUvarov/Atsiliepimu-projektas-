import express, { Express, Request, Response } from "express";
import db from "./db";
import { User } from "./db/schema"
import { Subject } from "./db/schema";
import { Tag } from "./db/schema";
import { SubjectTag } from "./db/schema";
import { Reviews } from "./db/schema";
import { Comment } from "./db/schema";
import { Rate } from "./db/schema";


import cors from "cors";
const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to check if API is working
app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });});

// Fetch all users
app.get("/api/users", async (req: Request, res: Response) => {
  let users = await db.select().from(User); 
  res.json(users);
});
app.get("/api/Subject", async (req: Request, res: Response) => {
  let subjects = await db.select().from(Subject); 
  res.json(subjects);
});

app.get("/api/Tag", async (req: Request, res: Response) => {
  let tags = await db.select().from(Tag); 
  res.json(tags);
});

app.get("/api/SubjectTag", async (req: Request, res: Response) => {
  let subjectTags = await db.select().from(SubjectTag); 
  res.json(subjectTags);
});

app.get("/api/reviews", async (req: Request, res: Response) => {
  let reviews = await db.select().from(Reviews); 
  res.json(reviews);
});

app.get("/api/comment", async (req: Request, res: Response) => {
  let comments = await db.select().from(Comment); 
  res.json(comments);
});

app.get("/api/rate", async (req: Request, res: Response) => {
  let rates = await db.select().from(Rate); 
  res.json(rates);
});



const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
