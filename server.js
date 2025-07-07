import express from 'express'
import router from './routes/routes.js'
import { ConnectDB } from './config/jobs_db.js'
import Contact from './models/contactus_model.js'
import job from './models/jobs_model.js'
import Notify from './models/notify_model.js'
import client_job from './models/client_jobpost_model.js'

import admin from './models/admin_model.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config()
ConnectDB();
const app = express()
// Middlewares
// Set view engine
app.set('view engine', 'ejs')

// Static files middleware
app.use(express.static('static'))

// Body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

// Routes
app.use('/', router)
app.use('/',(req,res)=>{
    res.render('error',{error:'Page dose not exists'})
})


// 
export function adminAuth(req, res, next) {
    if (req.cookies && req.cookies.username=== 'bhatti') {
        return next();
    } else {
        return res.status(403).render('error', { error: 'Access denied: Admins only.' });
    }
}


// Server
app.listen(3000, () => {
    console.log('Server is running');
})