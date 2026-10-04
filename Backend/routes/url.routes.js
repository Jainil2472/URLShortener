import express from 'express'
import {  urlPostRequestBody } from '../validation/request.validation.js';
import { nanoid } from 'nanoid'
import { urlTable } from '../model/url.model.js';
import { db } from '../db/index.js';
import { and, eq } from 'drizzle-orm';
import { addURL } from '../services/url.service.js';
import { authorizeID } from '../middleware/auth.middleware.js';


const route = express.Router();


route.get('/list',authorizeID,async (req,res)=>{
    
    const list = await db
    .select({
        id: urlTable.id,
        url : urlTable.url,
        code : urlTable.code,
    })
    .from(urlTable)
    .where(eq(urlTable.userId,req.user.id));

    return res.json(list);
})



route.post('/shorten',authorizeID,async (req,res) => {
    

    const body = await urlPostRequestBody.safeParseAsync(req.body);
    if(body.error){
        return res.status(422).json({error: body.error.format()});
    }

    const {url,code} = body.data;
    const shortcode = code || nanoid(6);
    console.log(shortcode);
    

    const add = await addURL(url,shortcode,req.user.id);
    
    
    return res.json({id: add.id, url: add.url, code: shortcode})

    

})

route.get('/:shortener',authorizeID,async (req,res) =>{
    
    const [list] = await db
    .select({
        url : urlTable.url,
    })
    .from(urlTable)
    .where(eq(urlTable.code,req.params.shortener));

    console.log(list);
    res.redirect(list.url);
    

})

route.delete('/delete/:id',authorizeID,async (req,res)=>{
    const urlid= req.params.id;//change to code
    const userid= req.user.id;
    const delition = await db
    .delete(urlTable)
    .where(and(eq(urlTable.id,urlid), eq(urlTable.userId,userid)))
    return res.json(delition);
})

export default route;