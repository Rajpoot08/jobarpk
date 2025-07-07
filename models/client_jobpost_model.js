import mongoose  from "mongoose";
const job_schema=mongoose.Schema({
    post_name:{
        type:'String'
           },
    salary:{
        type:'String'
           },
            location:{
        type:'String'
           },
    education:{type:'String'
           },
    responsibilities:{
        type:'String'
           },
           
company_name:{
        type:'String'
     },
     conpany_type:{
        type:'String'   
    },
    experience:{
        type:'String'  
     },

 expiry_date:{
        type:'String'
           },

    gender:{
        type:'String'
           },
   job_type:{
        type:'String'
           },
    job_shift:{
        type:'String'
           },



})
const client_job=mongoose.model('client_jobs',job_schema)
export default client_job