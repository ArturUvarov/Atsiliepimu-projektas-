import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import db from "../db"; // Import the Drizzle database instance
import { User } from "../db/schema"; // Import the User schema
import { eq } from "drizzle-orm"; // Import the eq function for equality checks

export class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        const { email, password, username } = req.body;

        try {
            // Check if the user already exists
            const existingUser = await db
                .select()
                .from(User)
                .where(eq(User.email,email))
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

            return res.status(201).json({ message: "User created successfully", user: newUser });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error });
        }
    }
}