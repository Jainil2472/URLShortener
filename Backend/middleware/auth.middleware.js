import { jwtVerify } from '../utils/jwt.utils.js';

export async function authorized(req, res, next) {

    const jwtToken = req.cookies.jwt;

    if (!jwtToken) {
        return res.status(401).json({
            error: "You have to login first"
        });
    }

    const jwt = jwtVerify(jwtToken);

    if (!jwt) {
        return res.status(401).json({
            error: "Your token is invalid"
        });
    }

    req.user = jwt;

    next();
}  

export function authorizeID(req,res,next){
    if(!req.user || !req.user.id ){
            return res.status(401).json({error: 'you have to login first'});
        }
        next();
}