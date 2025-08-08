const mongoose=require('mongoose')
require('dotenv').config()

async function connectDB(){
    try{
        await mongoose.connect(processs.env.MONGODB);
        console.log('Database connected Successfully')
    }
    catch(err){
        console.log('Database Connection Failed')
    }
}

module.exports=connectDB