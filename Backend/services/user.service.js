import {userTable} from '../model/user.model.js'
import {db} from '../db/index.js'
import { eq } from 'drizzle-orm';


export async function getUserByEmail(email){

    const [checkEmail] = await db
    .select({
        id : userTable.id,
        name: userTable.name,
        email: userTable.email,
        password: userTable.password,
        salt: userTable.salt,
    })
    .from(userTable)
    .where(eq(userTable.email,email));
    return checkEmail;
}

