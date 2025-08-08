const express= require('express');
const app= express();
const connectDB=require('./config/db')
const userRoute=require('./routes/userRoute');
require('dotenv').config();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth',userRoute);

app.get('/',async(req,res)=>{
    res.status(200).json({
        message:"get request ready"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is Connected ${PORT}` )
    connectDB()
})