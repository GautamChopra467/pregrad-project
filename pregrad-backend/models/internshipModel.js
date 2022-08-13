const mongoose = require('mongoose')

const internshipSchema = new mongoose.Schema({
    id:{
        type:String
    },
    title:{
      type:String,
      trim:true
    },
    noofemployees:{
        type:Number
    },
    jobtype:{
        type:String
    },
    description:{
        type:String
    },
    perks:{
        type:Object,
        default:{}
    },
    stipend:{
        type:Object,
        default:{}
    },
    skills:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    experience:{
      type:String
    },
    expiresAt:{
        type:Date
    },
    status:{
        type:String,
        default:"Open"
    },
    startfrom:{
        type:String
    },
    jobmode:{
        type:String
    },
    duration:{
        type:String
    }

})

module.exports = mongoose.model('Internship',internshipSchema)
