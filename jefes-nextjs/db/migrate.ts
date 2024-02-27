import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './db';
 
// This will run migrations on the database, skipping the ones already applied
const push = await migrate(db, { migrationsFolder: './drizzle/migrations' });
 
// Don't forget to close the connection, otherwise the script will hang
const con = await connection.end();