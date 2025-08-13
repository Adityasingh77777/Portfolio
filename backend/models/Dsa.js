const mongoose=require("mongoose");

const dsaSchema=new mongoose.Schema({
    leetcode: {
    username: String,
    solved: Number,
    ranking: Number,
    badges: [String]
  },
  codeforces: {
    username: String,
    rating: Number,
    maxRating: Number,
    rank: String
  },
  codechef: {
    username: String,
    rating: Number,
    stars: Number,
    globalRank: Number
  },
  achievements: [{
    title: String,
    description: String,
    date: Date,
    platform: String
  }]
})

module.exports=mongoose.model("Dsa",dsaSchema);