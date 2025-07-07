import mongoose  from "mongoose";
const contact_schema=mongoose.Schema({
    name:{
        type:'String'
           },
  
    description:{
        type:'String'
           },
    email:{
        type:'String'
           },

phone:{
        type:'String' },

})
const Contacts=mongoose.model('Contact_us',contact_schema)
export default Contacts