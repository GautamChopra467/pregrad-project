const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
    title:{
       type:String
    },
    certificate:{
        type:String
    }
})

const projectSchema = new mongoose.Schema({
    projecttitle:{
       type:String
    },
    description:{
        type:String
    },
    skills:{
        type:String
    },
    projectlink:{
        type:String
    }
})

const workSchema = new mongoose.Schema({
    companyname:{
       type:String
    },
    position:{
        type:String
    },
    duration:{
        type:String
    },
    companyweb:{
        type:String
    },
    skillsUsed:{
        type:String
    }
})

const educationSchema = new mongoose.Schema({
    university:{
        type:String
     },
     field:{
         type:String
     },
     degree:{
         type:String
     },
     start:{
         type:String
     },
     end:{
         type:String
     }
})

const UserInfoSchema = new mongoose.Schema({
    id:{
      type:String
    },
    achievements:[
            achievementSchema
        ],
    project:[
            projectSchema
    ],
    workexperience:[
            workSchema
    ],
    education:[
        educationSchema
    ]
})
   

module.exports = mongoose.model('StudentInfo',UserInfoSchema)
