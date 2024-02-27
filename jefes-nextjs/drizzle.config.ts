// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DB_HOST) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
    uri: process.env.DB_URI,
  },
} satisfies Config;
