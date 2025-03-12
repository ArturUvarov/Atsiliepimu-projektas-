import { Request, Response } from "express";
import db from "../db/index";
import { User } from "../db/schema";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(User);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Cant get users" });
  }
};
