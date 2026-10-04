import {createHmac, randomBytes} from 'node:crypto';
import 'dotenv/config'
export function encrypt(password, salt = undefined){

    salt = salt ?? randomBytes(256).toString('hex');
    const encoded = createHmac('sha256',salt).update(password).digest('hex');
    return {salt,encoded};
    
}