import mongoose  from "mongoose";
const admin_schema=mongoose.Schema({
    email:
    {
        type:'String'
           },
    password:
    {
        type:'String'
           },
   
})
const admin=mongoose.model('Admin_login',admin_schema)
export default admin