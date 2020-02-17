const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
module.exports = (app) =>{
    app.post("/login", (req, res) =>{
        // create a user a new user
        User.findOne({email: req.body.email}, function(err, user){
            if(err) throw err
            user.comparePassword(req.body.password, function(err, isMatch){
                if(err) throw err;
                console.log(req.body.password, isMatch);
            })
        })
    })
}