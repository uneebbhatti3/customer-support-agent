import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";

// Named DB_URL, not DATABASE_URL, on purpose:
// the ADK dev tools use DATABASE_URL for their own chat storage.
const connectionString = process.env.DB_URL;

if (!connectionString) {
  throw new Error("DB_URL is missing. Add it to your .env file.");
}

const adapter = new PrismaPg({ connectionString });

export const db = new PrismaClient({ adapter });
