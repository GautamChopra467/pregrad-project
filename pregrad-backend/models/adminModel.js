const mongoose = require("mongoose");
const CONFIG = require("../utils/config/Schema");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified:{
        type:Array,
        default:[]
    },
    reports:{
        type:Array,
        default:[]
    }
})

const admin = mongoose.model(CONFIG.ADMIN,adminSchema);

module.exports = admin;