import express from 'express'
import {loginPostRequest, signupPostRequestBody} from '../validation/request.validation.js'
import { getUserByEmail } from '../services/user.service.js';
import { encrypt } from '../utils/saulting.utils.js';
import { db } from '../db/index.js';
import { userTable } from '../model/user.model.js';
import { jwtCreate } from '../utils/jwt.utils.js';

const route = express.Router();

route.post('/signup',async(req,res) => {

    //request validation
    const validatioResult = await signupPostRequestBody.safeParseAsync(req.body);
    if(validatioResult.error){
        return res.status(422).json({error: validatioResult.error.format()});
    }

    const {name,email,password} = validatioResult.data;

    const checkEmail = await getUserByEmail(email);

    if(checkEmail){
        console.log(password);
        return res.status(422).json({error: "this email is already in this system"})
    }

    
    const {salt,encoded} = encrypt(password);

    const [add] = await db
    .insert(userTable)
    .values({
        name,
        email,
        password : encoded,
        salt
    })
    .returning({id: userTable.id});

    return res.json(add);
    
    
})

route.post('/login',async (req,res)=>{

    const loginCred =await loginPostRequest.safeParseAsync(req.body)
    if(loginCred.error){
        return res.status(401).json({error: validatioResult.error.format()});
    }
    const {email,password} = loginCred.data;
    const checkemail = await getUserByEmail(email);
    
    if(!checkemail){
        return res.status(422).json({error: "email doesnot exsist"})
    }

    const {encoded} = encrypt(password,checkemail.salt)

    // console.log(`given by login request ${encoded} \n and given by usertable${checkemail.password} \n ${checkemail.salt}`);
    
    if(checkemail.password != encoded){
        return res.status(422).json({error: `the password is wrong please check it `})
    }

    const jwt = jwtCreate(checkemail.id);
    res.user = checkemail;
    res.cookie("jwt",jwt,{
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })
    return res.json({
        message: "Login Successful"
    })
    


})


export default route;