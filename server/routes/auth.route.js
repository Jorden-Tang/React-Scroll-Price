const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
const jwt = require('jsonwebtoken')

module.exports = (app) =>{
    app.post("/login", async (req, res) =>{
        const {email, password} = req.body;
        let errors = [];
        let isMatch = null;
        if(!email || !password ){
            errors.push("please fill in email and password");
        }
        const user = await User.findOne({email: req.body.email});
        if(user === null){
            errors.push("this email is not registered")
        }
        else{
            let isMatch = await user.comparePassword(req.body.password)
            console.log(isMatch)
            if(!isMatch){
                    errors.push("incorrect password");
            }
            else{
                if(user.isAdmin){
                    jwt.sign({user:user}, 'super_admin_key', {expiresIn: '7d'}, (err, token)=> {
                        res.json({token: token, isAdmin: user.isAdmin})
                    })
                }
                else{
                    jwt.sign({user:user}, 'user_key', {expiresIn: '7d'}, (err, token)=> {
                        res.json({token: token, isAdmin: user.isAdmin})
                    })
                }
            }
        }

        
        res.json({err: errors})
    })
}