import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "TEST!" });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});


