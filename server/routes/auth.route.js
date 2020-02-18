const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
module.exports = (app) =>{
    app.post("/login", (req, res) =>{
        // create a user a new user
        User.findOne({email: req.body.email}, function(err, user){
            if(err) throw err
            // console.log(user)
            //when admin logged in
            user.comparePassword(req.body.password, function(err, isMatch){
                if(err) throw err;
                //Temporary response and error handling for password matching
                if(!isMatch){
                    res.json({err: "password didn't match"})
                }
                else{
                    if(user.isAdmin){
                        console.log("admin has logged in")
                    }
                    res.json({good : "good"})
                }
            })
        })
    })
}