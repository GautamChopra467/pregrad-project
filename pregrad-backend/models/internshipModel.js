const mongoose = require('mongoose')

const internshipSchema = new mongoose.Schema({
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
        type:Number
    },
    stipend:{
        type:Number
    },
    noofhours:{
        type:Number
    },
    skills:{
        type:String
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
        default:"Open",
        enum:["Open","Closed"]
    }

})

module.exports = mongoose.model('Internship',internshipSchema)
