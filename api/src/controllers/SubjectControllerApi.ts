import { Request, Response } from "express";
import db from "../db/index";
import { Subject } from "../db/schema";

export const index = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(Subject);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get subject" });
  }
};
