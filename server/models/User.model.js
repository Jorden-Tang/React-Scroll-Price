const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'need to have a name']},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {type: String, required: [true, 'need to have a password']},
    isAdmin: {type: Boolean, default: false},
}, {timestamps: true})
const User = mongoose.model("User", userSchema)
module.exports = User