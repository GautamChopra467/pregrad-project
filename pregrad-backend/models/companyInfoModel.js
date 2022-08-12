const mongoose = require('mongoose')

const companyInfoSchema = new mongoose.Schema({
    id:{
        type:String
    },
    linkedin:{
        type:String
    },
    websitelink:{
        type:String
    },
    typeofcompany:{
        type:String
    },
    established:{
        type:Number
    },
    headquaters:{
        type:String
    },
    description:{
        type:String
    }
})

const Info = mongoose.model('CompanyInfo',companyInfoSchema)

module.exports = Info