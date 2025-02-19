import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
export const usersTable = mysqlTable('users_table', {
  id: int().primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: int().notNull(),
  status: int().notNull()
});