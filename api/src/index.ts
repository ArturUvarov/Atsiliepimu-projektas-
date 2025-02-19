import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/mysql2";
import { User } from "./db/schema";

const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });

import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "TEST!" });
});

app.get("/api/users", async (req: Request, res: Response) => {
  let users = await db.select().from(User); 
  res.json(users);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});


