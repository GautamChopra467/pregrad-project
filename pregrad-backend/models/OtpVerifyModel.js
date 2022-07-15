const mongoose= require('mongoose')
const bcrypt = require('bcryptjs')

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

OtpSchema.pre('save',async function(){

    const salt = await bcrypt.genSalt(10)
    this.otp = await bcrypt.hash(this.otp,salt)
})

const Otp = mongoose.model('Otp',OtpSchema)

module.exports=Otp


