import express, { Express, Request, Response } from "express";
import db from "./db";
import { User,Comment,Subject,SubjectTag,Tag,Rate,Review,} from "./db/schema";
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
  try{ let users = await db.select().from(User); res.json(users);} catch (error) {console.error("Error we getting:",error);}});

// Fetch all comments
app.get("/api/comment", async (req: Request, res: Response) => {
  try{ let comment = await db.select().from(Comment); res.json(comment);} catch (error) {console.error("Error we getting:",error);}});

// Fetch all subjects
app.get("/api/subject", async (req: Request, res: Response) => {
  try{ let subject = await db.select().from(Subject); res.json(subject);} catch (error) {console.error("Error we getting:",error);}});

// Fetch all tags
app.get("/api/tag", async (req: Request, res: Response) => {
  try{ let tag = await db.select().from(Tag); res.json(tag);} catch (error) {console.error("Error we getting:",error);}});

// Fetch all subject tags
app.get("/api/subjectTag", async (req: Request, res: Response) => {
  try{ let subjectTag = await db.select().from(SubjectTag); res.json(subjectTag);} catch (error) {console.error("Error we getting:",error);}});

  // Fetch all rates
app.get("/api/rate", async (req: Request, res: Response) => {
  try{ let rate = await db.select().from(Rate); res.json(rate);} catch (error) {console.error("Error we getting:",error);}});

// Fetch all reviews
app.get("/api/review", async (req: Request, res: Response) => {
  try{ let review = await db.select().from(Review); res.json(review);} catch (error) {console.error("Error we getting:",error);}});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
