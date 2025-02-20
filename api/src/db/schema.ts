import {
  int,
  mysqlTable,
  serial,
  varchar,
  tinyint,
  timestamp,
} from "drizzle-orm/mysql-core";
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
  postedAt: timestamp("posted_at").notNull().defaultNow(),
});
