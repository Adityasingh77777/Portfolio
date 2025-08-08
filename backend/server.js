const express= require('express');
const app= express();
const connectDB=require('./config/db')

app.use(express.json());

const PORT= process.env.PORT || 3000;

app.get('/',async(req,res)=>{
    res.status(200).json({
        message:"get request ready"
    })
})

app.listen(PORT, ()=>{
    console.log('Server is Connected')
    connectDB()
})