// db/schema.ts
// pnpm drizzle-kit generate:mysql
// pnpm tsx db/migrate.ts
import {
  index,
  int,
  mysqlTable,
  bigint,
  varchar,
  timestamp,
  mysqlSchema,
} from "drizzle-orm/mysql-core";

// export const mySchema = mysqlSchema("drizzle_jefes") for creating a new db

export const users = mysqlTable("users", {
  //   id: int("id").primaryKey().autoincrement(),
  // id must be a varchar in order to use it with next auth
  id: varchar("id", { length: 255 }).notNull().primaryKey(), 
  email: varchar("email", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

// export const menuItems = mysqlTable("menu_item", {
//   id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
//   itemName: varchar("item_name", { length: 256 }),
//   itemDescription: varchar("item_description", { length: 256 }),
// });
