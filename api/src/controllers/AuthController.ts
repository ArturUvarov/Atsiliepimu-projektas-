import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import db from "../db"; // Import the Drizzle database instance
import { User } from "../db/schema"; // Import the User schema
import { eq } from "drizzle-orm"; // Import the eq function for equality checks
import jwt from "jsonwebtoken";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, username } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await db
        .select()
        .from(User)
        .where(eq(User.email, email))
        .execute();

      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
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
      // Check if the user exists
      const user = await db
        .select()
        .from(User)
        .where(eq(User.email, email))
        .execute();

      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const existingUser = user[0];

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: existingUser.id, email: existingUser.email },
        process.env.JWT_SECRET || "default_secret", // Use a secret from environment variables
        { expiresIn: "1h" } // Token expiration time
      );

      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
}
