import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { User, Comment, Tag, Subject, SubjectTag } from "./schema";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });
async function main() {
  const password = await bcrypt.hash("password", 10);
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
  await db
    .insert(Comment)
    .values({
      id: 1,
      content: "First comment",
      date: new Date("2022-01-01 00:00:00"),
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created comment: ", "Hello World!");
  const commentCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(Comment);
  const commentCount = commentCountResult[0]?.count as number;
  if (commentCount < 10) {
    console.log("Creating 50 random comments...");
    await db.insert(Comment).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: commentCount + index + 1,
        content: faker.lorem.paragraph(2),
        date: faker.date.recent(),
      }))
    );
  }
  console.log("Seeding completed.");
  await db
    .insert(Subject)
    .values({
      id: 1,
      name: "First subject",
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created comment: ", "Hello World!");
  const subjectCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(Subject);
  const subjectCount = subjectCountResult[0]?.count as number;
  if (subjectCount < 10) {
    console.log("Creating 50 random comments...");
    await db.insert(Subject).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: commentCount + index + 1,
        name: faker.lorem.paragraph(2),
      }))
    );
  }
  console.log("Seeding completed.");
  await db
    .insert(Tag)
    .values({
      id: 1,
      name: "First tag",
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created comment: ", "Hello World!");
  const tagCountResult = await db.select({ count: sql`COUNT(*)` }).from(Tag);
  const tagCount = tagCountResult[0]?.count as number;
  if (tagCount < 10) {
    console.log("Creating 50 random comments...");
    await db.insert(Tag).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: commentCount + index + 1,
        name: faker.lorem.paragraph(2),
      }))
    );
  }
  console.log("Seeding completed.");
  await db.insert(SubjectTag).values({
    subject_id: 1,
    tag_id: 1,
  });
  console.log("Created comment: ", "Hello World!");
  const subjectTagCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(SubjectTag);
  const subjectTagCount = subjectTagCountResult[0]?.count as number;
  if (subjectTagCount < 10) {
    console.log("Creating 50 random comments...");
    await db.insert(SubjectTag).values(
      Array.from({ length: 50 }).map((_, index) => ({
        subject_id: commentCount + index + 1,
        tag_id: commentCount + index + 1,
      }))
    );
  }
  console.log("Seeding completed.");
}
main();
