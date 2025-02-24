import {
  int,
  mysqlTable,
  varchar,
  tinyint,
  timestamp,
  date,
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

export const Subject = mysqlTable('Subject', {
  id: int({unsigned: true}).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull()
});

export const Tag = mysqlTable('Tag', {
  id: int({unsigned: true}).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull()
});

export const SubjectTag = mysqlTable('SubjectTag', {
  subjectId: int({unsigned: true}).primaryKey().references(() => Subject.id),
  tagId: int({unsigned: true}).primaryKey().references(() => Tag.id)
});

// export const Comment = mysqlTable("comment", {
//   id: int({ unsigned: true }).autoincrement().primaryKey(),
//   postedAt: timestamp("posted_at").notNull().defaultNow(),
// });

export const Reviews = mysqlTable("Reviews", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  userId: int({ unsigned: true }).notNull().references(() => User.id),
  subjectId: int({ unsigned: true }).notNull().references(() => Subject.id),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});
