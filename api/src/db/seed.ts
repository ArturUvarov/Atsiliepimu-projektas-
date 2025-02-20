import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { User } from "./schema";
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';

const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });

async function main() {
  console.log("Seeding...");

  const password = await bcrypt.hash("password", 10);

  await db
    .insert(User)
    .values({ username: "user", email: "user@example.com", password })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });

  console.log("Created user: ", "user@example.com");

  await db
    .insert(User)
    .values({
      username: "admin",
      email: "admin@example.com",
      password,
      status: 2,
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });

  console.log("Created user: ", "admin@example.com");

  const userCountResult = await db.select({ count: sql`COUNT(*)` }).from(User);
  const userCount = userCountResult[0]?.count as number;
  if (userCount < 10) {
    console.log("Creating 50 random users...");
    await db.insert(User).values(
      Array.from({ length: 50 }).map(() => ({
        username: faker.person.firstName(),
        email: faker.internet.email(),
        password,
        status: faker.number.int({ min: 0, max: 20 }) < 2 ? 2 : 1,
      }))
    );
  }
  console.log("Seeding completed.");
}

main();
