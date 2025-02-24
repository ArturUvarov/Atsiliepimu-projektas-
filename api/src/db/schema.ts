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
export const Comment = mysqlTable("Comment", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
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
  subject_id: int({ unsigned: true })
    .primaryKey()
    .references(() => Subject.id),
  tag_id: int({ unsigned: true })
    .primaryKey()
    .references(() => Tag.id),
});
