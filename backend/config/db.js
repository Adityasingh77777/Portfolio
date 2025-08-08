const mongoose=require('mongoose')
require('dotenv').config()

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log("Database Connected Successfully")
    }
    catch(err){
        console.log('Database connnection failed',err.message)
    }
}

module.exports=connectDB