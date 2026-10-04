import 'dotenv/config'
import jwt from 'jsonwebtoken'


export function jwtCreate(payload){

    try {
        const token = jwt.sign({id: payload},process.env.SECRET_KEY, { expiresIn: '1h' })
        return token;
        
    } catch (error) {
        console.log(error);
        
    }

}
export function jwtVerify(token){

    try {
        const verified = jwt.verify(token,process.env.SECRET_KEY);
        return verified;
        
    } catch (error) {

        console.log('invalid token');
        return ;    
        
    }

}