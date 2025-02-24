import {
  int,
  mysqlTable,
  serial,
  varchar,
  tinyint,
  timestamp,
  date,
} from "drizzle-orm/mysql-core";
export const User = mysqlTable("User", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: tinyint({ unsigned: true }).default(1).notNull(),
  status: tinyint({ unsigned: true }).default(1).notNull(),
});
export const Comment = mysqlTable("comment", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  reviewId: int({ unsigned: true })
    .notNull()
    .references(() => Review.id),
  userId: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});
export const Tag = mysqlTable("tag", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});
export const Subject = mysqlTable("subject", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});
export const SubjectTag = mysqlTable("subject_tag", {
  subjectId: int({ unsigned: true })
    .primaryKey()
    .references(() => Subject.id),
  tagId: int({ unsigned: true })
    .primaryKey()
    .references(() => Tag.id),
});
export const Rate = mysqlTable("rate", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  reviewId: int({ unsigned: true })
    .primaryKey()
    .references(() => Review.id),
  userId: int({ unsigned: true })
    .primaryKey()
    .references(() => User.id),
  rate: tinyint({ unsigned: true }).notNull(),
});
export const Review = mysqlTable("review", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  userId: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  subjectId: int({ unsigned: true })
    .notNull()
    .references(() => Subject.id),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});
