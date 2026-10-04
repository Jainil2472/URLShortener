import { uuid, pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core"

export const userTable = pgTable('user',{
    id: uuid().defaultRandom().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull().unique(),
    password: text().notNull(),
    salt: text().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(()=>new Date()),
})

