import { Request, Response } from "express";
import db from "../db/index";
import { Tag } from "../db/schema";

export const getTags = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(Tag);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get tags" });
  }
};
