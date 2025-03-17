import { Request, Response } from "express";
import db from "../db/index";
import { Comment } from "../db/schema";

export const getComments = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(Comment);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get comment" });
  }
};
