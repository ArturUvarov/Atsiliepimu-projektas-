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

export const comment = mysqlTable("comment", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  review_id: int({ unsigned: true })
    .notNull()
    .references(() => Review.id),
  user_id: int({ unsigned: true })
    .notNull()
    .references(() => User.id),
  rate: tinyint().notNull(),
});

export const Subject = mysqlTable('Subject', {
  id: int({unsigned: true}).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull()
});

export const Tag = mysqlTable('Tag', {
  id: int({unsigned: true}).autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull()
});
