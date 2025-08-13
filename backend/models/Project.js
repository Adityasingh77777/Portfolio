const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    liveUrl:{
        type:string,
    },
    techStack:[{
        type:String,
    }],
    githubRepo:{
        type:String,
    },
    image:{
    url: String,
    public_id: String
    }

})

module.exports=mongoose.model("Project",projectSchema);