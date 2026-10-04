import express from 'express';
import 'dotenv/config'
import userRoutes from './routes/user.routes.js'
import urlRoutes from './routes/url.routes.js'
import { authorized } from './middleware/auth.middleware.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'
const port = process.env.PORT ?? 80000
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());

app.use('/get',authorized,(req,res)=>{
    console.log("i am true");
    
    res.json(true);
})

app.use('/user',userRoutes);
app.use('/url',authorized,urlRoutes)
app.listen(port,()=>{
    console.log("server is on");        
})