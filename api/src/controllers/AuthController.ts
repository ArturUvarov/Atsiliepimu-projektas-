import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import db from "../db";
import { User } from "../db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, username } = req.body;

    try {
      const existingUser = await db
        .select()
        .from(User)
        .where(eq(User.email, email))
        .execute();

      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await db
        .insert(User)
        .values({
          email,
          password: hashedPassword,
          username,
        })
        .execute();

      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await db
        .select()
        .from(User)
        .where(eq(User.email, email))
        .execute();

      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const existingUser = user[0];

      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: existingUser.id, email: existingUser.email },
        process.env.JWT_SECRET || "default_secret",
        { expiresIn: "1h" }
      );

      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }

  static async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "default_secret"
      ) as any;

      const user = await db
        .select({
          id: User.id,
          email: User.email,
          username: User.username,
        })
        .from(User)
        .where(eq(User.id, decoded.id))
        .execute();

      if (!user || user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user[0]);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }

  static async updateProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "default_secret"
      ) as any;
      const { username, email } = req.body;

      await db
        .update(User)
        .set({ username, email })
        .where(eq(User.id, decoded.id))
        .execute();

      return res.json({ message: "Profile updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
  static async isMod(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }
  
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "default_secret"
      ) as any;
  
      const user = await db
        .select({
          role: User.role,
        })
        .from(User)
        .where(eq(User.id, decoded.id))
        .execute();
  
      if (!user || user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isMod = user[0].role === 2;
      return res.json({ isMod });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
}
