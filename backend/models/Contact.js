const mongoose=require("mongoose");

const contactSchma=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:email,
    },
    contactNo:{
        type:Number
    },
    
})