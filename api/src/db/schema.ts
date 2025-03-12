import {
  int,
  mysqlTable,
  varchar,
  tinyint,
  timestamp,
  date,
  text,
} from "drizzle-orm/mysql-core";

export const User = mysqlTable("User", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: tinyint({ unsigned: true }).default(1).notNull(),
  status: tinyint({ unsigned: true }).default(1).notNull(),
});

export const Subject = mysqlTable("Subject", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});

export const Tag = mysqlTable("Tag", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});

export const SubjectTag = mysqlTable("SubjectTag", {
  subjectId: int({ unsigned: true })
    .primaryKey()
    .references(() => Subject.id),
  tagId: int({ unsigned: true })
    .primaryKey()
    .references(() => Tag.id),
});

export const Reviews = mysqlTable("Reviews", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  userId: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  subjectId: int({ unsigned: true })
    .notNull()
    .references(() => Subject.id),
  title: varchar({ length: 255 }).notNull(),
  content: text(),
  date: timestamp("date").notNull().defaultNow(),
});

export const Comment = mysqlTable("Comment", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  reviewId: int({ unsigned: true })
    .notNull()
    .references(() => Reviews.id),
  userId: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  content: text(),
  date: timestamp("date").notNull().defaultNow(),
});

export const Rate = mysqlTable("Rate", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  reviewId: int({ unsigned: true })
    .notNull()
    .references(() => Reviews.id),
  userId: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  rate: tinyint({ unsigned: true }).notNull(),
});
