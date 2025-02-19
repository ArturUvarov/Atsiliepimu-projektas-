import cors from 'cors';
import dotenv from 'dotenv';
import express, {
  Express,
  Request,
  Response,
} from 'express';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});