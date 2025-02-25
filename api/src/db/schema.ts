import {
  int,
  mysqlTable,
  varchar,
  tinyint,
  timestamp,
} from "drizzle-orm/mysql-core";

// Define User schema
export const User = mysqlTable("User", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: tinyint({ unsigned: true }).default(1).notNull(),
  status: tinyint({ unsigned: true }).default(1).notNull(),
});

// Define Subject schema
export const Subject = mysqlTable("Subject", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});

// Define Tag schema
export const Tag = mysqlTable("Tag", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});

// Define Review schema
export const Review = mysqlTable("Review", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  user_id: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  subject_id: int({ unsigned: true })
    .notNull()
    .references(() => Subject.id),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

// Define Comment schema
export const Comment = mysqlTable("Comment", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  review_id: int({ unsigned: true })
    .notNull()
    .references(() => Review.id),
  user_id: int({ unsigned: true }).references(() => User.id),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

// Define SubjectTag schema
export const SubjectTag = mysqlTable("SubjectTag", {
  subject_id: int({ unsigned: true })
    .primaryKey()
    .references(() => Subject.id),
  tag_id: int({ unsigned: true })
    .primaryKey()
    .references(() => Tag.id),
});

// Define Rate schema
export const Rate = mysqlTable("Rate", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  review_id: int({ unsigned: true })
    .notNull()
    .references(() => Review.id),
  user_id: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  rate: tinyint().notNull(),
});
