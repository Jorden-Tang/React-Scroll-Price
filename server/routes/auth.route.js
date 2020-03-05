const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
const jwt = require('jsonwebtoken')

module.exports = (app) =>{
    app.post("/api/login", async (req, res) =>{
        const {email, password} = req.body;
        let errors = [];
        if(!email || !password ){
            errors.push("please fill in email and password");
        }
        const user = await User.findOne({email: req.body.email});
        if(user === null){
            errors.push("Incorrect Credentials")
        }
        else{
            let isMatch = await user.comparePassword(req.body.password)
            if(!isMatch){
                    errors.push("Incorrect Credentials");
            }
            else{
                if(user.isAdmin){
                    jwt.sign({user:user}, 'super_admin_key', {expiresIn: '2d'}, (err, token)=> {
                        res.cookie("myCookie", token, {httpOnly: true}).json({
                            isAuth: true, isAdmin: true, user_id: user._id
                        })
                    })
                }
                else{
                    jwt.sign({user:user}, 'user_key', {expiresIn: '2d'}, (err, token)=> {
                        res.cookie("myCookie", token, {httpOnly: true}).json({
                            isAuth: true, isAdmin: false, user_id: user._id
                        })
                    })
                }
            }
        }
        if(errors.length > 0){
            res.json({err: errors})
        }
    }),

    app.post("/api/checkAdminLogin", (req, res) =>{
        jwt.verify(req.cookies.myCookie, 'super_admin_key', (err, decoded) => {
            if(err){
                //If error send Forbidden (403)
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                console.log("admin is logged in")
                res.json({isAuth: true, isAdmin: true})
            }
        })
    }),

    app.post("/api/checkUserLogin", (req, res) =>{
        jwt.verify(req.cookies.myCookie, 'user_key', (err, decoded) => {
            if(err){
                //If error send Forbidden (403)
                res.sendStatus(403);
            } else {
                console.log("user is logged in")
                res.json({isAuth: true, isAdmin: false})
            }
        })
    })
}