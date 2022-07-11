const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userRegisterSchema = new mongoose.Schema({
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
    mobile: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
});

userRegisterSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const UserRegister = new mongoose.model("UserRegister", userRegisterSchema);

module.exports = UserRegister;