import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { User } from "./schema";
import { Subject } from "./schema";
import { Tag } from "./schema";
import { SubjectTag } from "./schema";
import { Reviews } from "./schema";
import { Comment } from "./schema";
import { Rate } from "./schema";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

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
  await db
  .insert(Subject)
  .values({ name: "Sub"})
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Seeding completed.");

  await db
  .insert(Tag)
  .values({ name: "Tag"})
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Seeding completed.");

  await db
  .insert(SubjectTag)
  .values({ subjectId: 1, tagId: 1})
  console.log("Seeding completed.");

  await db
  .insert(Reviews)
  .values({ userId: 1, subjectId: 1, title: "Title", content: "Content"})
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Seeding completed.");

  await db
  .insert(Comment)
  .values({ reviewId: 1, userId: 1, content: "Comment"})
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Seeding completed.");

  await db
  .insert(Rate)
  .values({ reviewId: 1, userId: 1, rate: 5})
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Seeding completed.");
}

main();
