const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
    title:{
       type:String
    },
    certificate:{
        type:String
    }
})

const UserInfoSchema = new mongoose.Schema({
    id:{
      type:String
    },
    achievements:[
        achievementSchema
    ]
})

const userInfo = mongoose.model('UserInfo',UserInfoSchema)

module.exports = userInfo