import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/adminroutes.js';
import { EmployeeRouter } from './Routes/EmployeeRoutes.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const port = 5050;
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use('/auth', adminRouter)
app.use('/employee', EmployeeRouter)
app.use(express.static('Public'))

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
        jwt.verify(token, "jwt_secret_key", (err ,decoded) => {
            if(err) return res.json({Status: false, Error: "Wrong Token"})
            req.id = decoded.id;
            req.role = decoded.role;
            next()
        })
    } else {
        return res.json({Status: false, Error: "Not autheticated"})
    }
}
app.get('/verify',verifyUser, (req, res)=> {
    return res.json({Status: true, role: req.role, id: req.id})
} )

app.listen(port, () => console.log("Listening on port " + port))
