import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  User,
  Comment,
  Tag,
  Subject,
  SubjectTag,
  Rate,
  Review,
} from "./schema";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import { date } from "drizzle-orm/mysql-core";
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
      reviewId: 1,
      userId: 1,
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
        reviewId: faker.number.int({ min: 1, max: 50 }),
        userId: faker.number.int({ min: 1, max: 50 }),
        content: faker.lorem.paragraph(2),
        date: faker.date.recent(),
      }))
    );
  }
  console.log("Seeding completed.");
  await db
    .insert(Tag)
    .values({
      id: 1,
      name: "First Tag",
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created Tag: ", "First Tag");
  const tagCountResult = await db.select({ count: sql`COUNT(*)` }).from(Tag);
  const tagCount = tagCountResult[0]?.count as number;
  if (tagCount < 10) {
    console.log("Creating 50 random tags...");
    await db.insert(Tag).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: tagCount + index + 1,
        name: faker.lorem.word(),
      }))
    );
  }
  await db
    .insert(Subject)
    .values({
      id: 1,
      name: "First subject",
    })
    .onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created Subject: ", "First Subject");
  const subjectCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(Subject);
  const subjectCount = subjectCountResult[0]?.count as number;
  if (subjectCount < 10) {
    console.log("Creating 50 random subjects...");
    await db.insert(Subject).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: subjectCount + index + 1,
        name: faker.lorem.word(),
      }))
    );
  }
  await db.insert(SubjectTag).values({
    subjectId: 1,
    tagId: 1,
  });
  console.log("Created SubjectTag: ", "First SubjectTag");
  const subjectTagCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(SubjectTag);
  const subjectTagCount = subjectTagCountResult[0]?.count as number;
  if (subjectTagCount < 10) {
    console.log("Creating 50 random subjectTags...");
    await db.insert(SubjectTag).values(
      Array.from({ length: 50 }).map((_, index) => ({
        subjectId: subjectTagCount + index + 1,
        tagId: faker.number.int({ min: 1, max: 50 }),
      }))
    );
  }

  await db.insert(Rate).values({
    id: 1,
    reviewId: 1,
    userId: 1,
    rate: 5,
  });
  console.log("Created Rate: ", "First Rate");
  const rateCountResult = await db.select({ count: sql`COUNT(*)` }).from(Rate);
  const rateCount = rateCountResult[0]?.count as number;
  if (rateCount < 10) {
    console.log("Creating 50 random Rates...");
    await db.insert(Rate).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: rateCount + index + 1,
        reviewId: faker.number.int({ min: 1, max: 50 }),
        userId: faker.number.int({ min: 1, max: 50 }),
        rate: faker.number.int({ min: 1, max: 5 }),
      }))
    );
  }
  await db.insert(Review).values({
    id: 1,
    userId: 1,
    subjectId: 1,
    title: "First Review",
    content: "First Review",
    date: new Date("2022-01-01 00:00:00"),
  });
  console.log("Created Review: ", "First Review");
  const reviewCountResult = await db
    .select({ count: sql`COUNT(*)` })
    .from(Review);
  const reviewCount = reviewCountResult[0]?.count as number;
  if (reviewCount < 10) {
    console.log("Creating 50 random Reviews...");
    await db.insert(Review).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: rateCount + index + 1,
        userId: faker.number.int({ min: 1, max: 50 }),
        subjectId: faker.number.int({ min: 1, max: 50 }),
        title: faker.lorem.word(),
        content: faker.lorem.paragraph(2),
        date: faker.date.recent(),
      }))
    );
  }
}
main();
