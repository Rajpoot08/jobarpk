import mongoose from "mongoose";
import job from '../models/jobs_model.js';
import Contact from '../models/contactus_model.js'
import admin from '../models/admin_model.js'; 
import Notify from '../models/notify_model.js'
import client_job from '../models/client_jobpost_model.js'
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config()
  


// jobs route
export const jobs_route=async(req,res)=>{
         try{
      const jobs=await job.find()
      const government_jobs=await job.find({company_type:'Government'})
      const private_jobs=await job.find({company_type:'Private'})
      const foreign_jobs=await job.find({company_type:'Foreign'})

      res.render('jobs',{jobs,government_jobs,private_jobs,foreign_jobs})
      }catch(err){
        res.render('server_error')
      }
}
export const contact_route=(req,res)=>{
    res.render("contact");
}
export const about_route=(req,res)=>{
    res.render("about");
}
export const notify_route=(req,res)=>{
    res.render("notify");
}
export const admin_login_route=(req,res)=>{
    res.render("login",{error:null});
}

// user post 
export const notify_post_route=async(req,res)=>{
    try{
    await Notify.create(req.body)
   res.redirect('/')
      }catch(err){
        res.redirect('server_error',{error:'Server Error'})
      }

}
export const job_post_post_route=async(req,res)=>{
     try{
    await client_job.create(req.body)
   res.redirect('/')
      }catch(err){
        res.redirect('server_error',{error:'Server Error'})
      }
}
export const contact_post_route=async(req,res)=>{
     try{
    await Contact.create(req.body)
   res.redirect('/')
      }catch(err){
        res.redirect('server_error',{error:'Server Error'})
      }
}

// POST Admin Routes
export const admin_route=async(req,res)=>{
      try{
        const Notifications = await Notify.find()
          const Client_jobs=await client_job.find()
          const Contacts = await Contact.find()
          const jobs=await job.find()
          res.render('admin',{jobs, Contacts,Notifications,Client_jobs})
      }catch(err){
        res.redirect('server_error',{error:'Server Error'})
      }
}
export const admin_post_route=(req,res)=>{
    res.render("admin_post");
}
export const admin_update_route=async(req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:'not found'})
      }
      try{
        const jobs=await job.findOne({_id:req.params.id})
       res.render('admin_update',{jobs})
      }catch(err){
           res.render('server_error',{error:'Server Error'})
      }
 
}
export const admin_post_post_route=async(req,res)=>{
      try{
  await job.create(req.body)
   res.redirect('/admin_pannel')
      }catch(err){
        res.redirect('server_error',{error:'Server Error'})
      }
};
export const admin_post_update_route=async(req,res)=>{

      try {
        const { id, post_name, salary, location, education, company_name, company_type, experience, expiry_date, gender, job_type, job_shift, responsibilities, description } = req.body;
        await job.findByIdAndUpdate(id, {
          post_name,
          salary,
          location,
          education,
          company_name,
          company_type,
          experience,
          expiry_date,
          gender,
          job_type,
          job_shift,
          responsibilities,
          description
        });
        res.redirect("/admin_pannel");
      } catch (err) {
        res.status(500).send("Update failed: " + err.message);
      }
};
export const admin_post_delete_route=async(req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:' not found'})
      }
      try{
  await job.findByIdAndDelete(req.params.id)
  res.redirect('/admin_pannel')
      }catch(err){
        res.render('server_error',{error:'Server Error'})
      }
};
export const admin_notify_delete_route=async(req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:' not found'})
      }
      try{
  await Notify.findByIdAndDelete(req.params.id)
  res.redirect('/admin_pannel')
      }catch(err){
        res.render('server_error',{error:'Server Error'})
      }
};
export const admin_jobpost_delete_route=async(req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:' not found'})
      }
      try{
  await client_job.findByIdAndDelete(req.params.id)
  res.redirect('/admin_pannel')
      }catch(err){
        res.render('server_error',{error:'Server Error'})
      }
};
export const admin_contact_delete_route=async(req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:' not found'})
      }
      try{
  await Contact.findByIdAndDelete(req.params.id)
  res.redirect('/admin_pannel')
      }catch(err){
        res.render('server_error',{error:'Server Error'})
      }
};
// 

export const job_post_route=(req,res)=>{
    res.render("job_post");
}
export const job_search_route=(req,res)=>{
    res.render("job_search");
}
export const job_view_route=async (req,res)=>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
          return res.render('error',{error:' not found'})
      }
      try{
          const jobs=await job.findById(req.params.id)
          res.render('job_view',{jobs})
      }catch(err){
          res.render('server_error',{error:'Server Error'})
      }

}
export const admin_login_post_route=(req,res)=>{
    const { email, password } = req.body;
    try {
        const adminUser = { 
        email: process.env.Email,
         password: process.env.Password,};
        if (!adminUser.email) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        if (adminUser.password === password) {
             res.cookie('username','bhatti',{
          maxAge:1000*60*60,
          httpOnly:true
  })
            return res.redirect('/admin_pannel');
        } else {
            return res.render('login', { error: 'Invalid email or password' });
        }
    } catch (err) {
        return res.render('login', { error: 'Server error' });
    }
}
// 

