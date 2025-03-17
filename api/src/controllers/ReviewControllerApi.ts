import { Request, Response } from "express";
import db from "../db/index";
import { Reviews } from "../db/schema";

export const getReview = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(Reviews);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get Review" });
  }
};
