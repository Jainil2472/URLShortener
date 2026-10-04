import { db } from "../db/index.js";
import { urlTable } from "../model/url.model.js";


export async function addURL(url,code,userId){
    const [add] = await db
        
        .insert(urlTable)
        .values({
            url,
            code ,
            userId ,
        })
        .returning({id: urlTable.id, url: urlTable.url, code: urlTable.code})
        return add;
}



