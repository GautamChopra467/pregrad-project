const mongoose= require('mongoose')

const OtpSchema= new mongoose.Schema({
    email:{
        type:String
    },
    otp:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    expiredAt:{
        type:Date
    }
})

const Otp = mongoose.model('Otp',OtpSchema)

module.exports=Otp


