import mongoose  from "mongoose";
const job_schema=mongoose.Schema({
    post_name:
    {
        type:'String'
           },
    salary:
    {
        type:'String'
           },
    education:
    {
        type:'String'
        },
    location:
    {
        type:'String'
           },
    gender:
    {
        type:'String'
           },
   job_type:{
        type:'String'
           },
    job_shift:{
        type:'String'
           },
    expiry_date:{
        type:'String'
           },
    description:
    {
        type:'String'
           },
    responsibilities:{
        type:'String'
           },

company_name:{
        type:'String'  
    },
    company_type:{
        type:'String'},
   experience:{
        type:'String'}

})
const job=mongoose.model('All_jobs',job_schema)
export default job