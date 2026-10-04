import { uuid, pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core"
import { userTable } from "./user.model.js"

export const urlTable = pgTable('url',{
    id: uuid().defaultRandom().primaryKey(),

    url: varchar().notNull(),
    code: varchar().notNull(),

    userId: uuid().references(() => userTable.id).notNull(),
    
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(()=>new Date()),
})


