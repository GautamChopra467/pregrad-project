const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name:{
      type:String,
      trim:true
    },
    designation:{
        type:String
    },
    email:{
        type:String
    },
    companyname:{
        type:String
    },
    establish:{
        type:Number
    },
    phoneno:{
        type:Number
    },
    password:{
        type:String
    },
    verified: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Company',companySchema)
