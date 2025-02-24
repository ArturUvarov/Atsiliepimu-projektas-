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

// Database connection
const db = drizzle({ connection: { uri: process.env.DATABASE_URL } });

async function main() {
  // ==============================
  // SEED USERS
  // ==============================
  await seedUsers();

  // ==============================
  // SEED SUBJECTS
  // ==============================
  await seedSubjects();

  // ==============================
  // SEED REVIEWS
  // ==============================
  await seedReviews();

  // ==============================
  // SEED COMMENTS
  // ==============================
  await seedComments();

  // ==============================
  // SEED TAGS
  // ==============================
  await seedTags();

  // ==============================
  // SEED SUBJECTTAGS
  // ==============================
  await seedSubjectTags();

  // ==============================
  // SEED RATES
  // ==============================
  await seedRates();

  console.log("All seeding completed successfully.");
}

// Function to seed users
async function seedUsers() {
  const password = await bcrypt.hash("password", 10);

  // Insert admin user
  await db.insert(User).values({
    username: "admin",
    email: "admin@example.com",
    password,
    status: 2,
  }).onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created user: admin@example.com");

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

// Function to seed reviews
async function seedReviews() {
  await db.insert(Review).values({
    id: 1,
    user_id: 1,
    subject_id: 1,
    title: "First review",
    content: "First review content",
    date: new Date("2022-01-01 00:00:00"),
  }).onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created review: First review");

  const reviewCountResult = await db.select({ count: sql`COUNT(*)` }).from(Review);
  const reviewCount = reviewCountResult[0]?.count as number;

  if (reviewCount < 10) {
    console.log("Creating 50 random reviews...");
    await db.insert(Review).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: reviewCount + index + 1,
        user_id: faker.number.int({ min: 1, max: 50 }),
        subject_id: faker.number.int({ min: 1, max: 50 }),
        title: faker.lorem.paragraph(1),
        content: faker.lorem.paragraph(2),
        date: faker.date.recent(),
      }))
    );
  }

  console.log("Reviews seeding completed.");
}

// Function to seed comments
async function seedComments() {
  await db.insert(Comment).values({
    id: 1,
    review_id: 1,
    user_id: 1,
    content: "First comment",
    date: new Date("2022-01-01 00:00:00"),
  }).onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created comment: First comment");

  const commentCountResult = await db.select({ count: sql`COUNT(*)` }).from(Comment);
  const commentCount = commentCountResult[0]?.count as number;

  if (commentCount < 10) {
    console.log("Creating 50 random comments...");
    await db.insert(Comment).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: commentCount + index + 1,
        review_id: faker.number.int({ min: 1, max: 50 }),
        user_id: faker.number.int({ min: 1, max: 50 }),
        content: faker.lorem.paragraph(2),
        date: faker.date.recent(),
      }))
    );
  }

  console.log("Comments seeding completed.");
}

// Function to seed tags
async function seedTags() {
  await db.insert(Tag).values({
    id: 1,
    name: "First tag",
  }).onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created tag: First tag");

  const tagCountResult = await db.select({ count: sql`COUNT(*)` }).from(Tag);
  const tagCount = tagCountResult[0]?.count as number;

  if (tagCount < 10) {
    console.log("Creating 50 random tags...");
    await db.insert(Tag).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: tagCount + index + 1,
        name: faker.lorem.paragraph(2),
      }))
    );
  }

  console.log("Tags seeding completed.");
}

// Function to seed subject tags
async function seedSubjectTags() {
  const generateSubjectTags = (numTags: number): [number, number][] => {
    const subjectTags: [number, number][] = [];
    for (let i = 0; i < numTags; i++) {
      const subjectId = Math.floor(Math.random() * 50) + 1;
      const tagId = Math.floor(Math.random() * 50) + 1;
      subjectTags.push([subjectId, tagId]);
    }
    return subjectTags;
  };

  const subjectTags = generateSubjectTags(50);
  console.log("Seeding SubjectTags...");

  await db.insert(SubjectTag).values(
    subjectTags.map(([subjectId, tagId]) => ({
      subject_id: subjectId,
      tag_id: tagId,
    }))
  ).onDuplicateKeyUpdate({
    set: { subject_id: sql`subject_id`, tag_id: sql`tag_id` },
  });

  console.log("SubjectTags seeding completed.");
}

// Function to seed rates
async function seedRates() {
  await db.insert(Rate).values({
    id: 1,
    user_id: 1,
    review_id: 1,
    rate: 5,
  }).onDuplicateKeyUpdate({ set: { id: sql`id` } });
  console.log("Created rate for review 1");

  const rateCountResult = await db.select({ count: sql`COUNT(*)` }).from(Rate);
  const rateCount = rateCountResult[0]?.count as number;

  if (rateCount < 10) {
    console.log("Creating 50 random rates...");
    await db.insert(Rate).values(
      Array.from({ length: 50 }).map((_, index) => ({
        id: rateCount + index + 1,
        user_id: faker.number.int({ min: 1, max: 50 }),
        review_id: faker.number.int({ min: 1, max: 50 }),
        rate: faker.number.int({ min: 1, max: 5 }),
      }))
    );
  }

  console.log("Rates seeding completed.");
}

// Execute the main function
main();
