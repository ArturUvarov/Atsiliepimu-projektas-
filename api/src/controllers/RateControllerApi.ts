import { Request, Response } from "express";
import db from "../db/index";
import { Rate } from "../db/schema";

export const getRate = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(Rate);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get Rate" });
  }
};
