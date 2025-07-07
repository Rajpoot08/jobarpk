import mongoose  from "mongoose";
const notify_schema=mongoose.Schema({
    job_post:{
        type:'String'
           },
  
    location:{
        type:'String'
           },
    job_type:{
        type:'String'
           },

min_salary:{
        type:'String' },
max_salary:{
        type:'String' },
email:{
        type:'String' },
frequency:{
        type:'String' }

})
const Notify=mongoose.model('Notifications',notify_schema)
export default Notify