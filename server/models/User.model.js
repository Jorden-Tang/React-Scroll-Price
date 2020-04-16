const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');
const SALT_WORK_FACTOR = 10

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'need to have a name']},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, 'This Email is already registered'],
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String, 
        minlength: [8, 'password has to be at least 8 characters in length'],
        required: [true, 'need to have a password'], 
        },
    isAdmin: {type: Boolean, default: false},
}, {timestamps: true});

userSchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();
 
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
 
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(inputPassword){
    return bcrypt.compare(inputPassword, this.password);
};
const User = mongoose.model("User", userSchema)
module.exports = User