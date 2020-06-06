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
                    jwt.sign({user_id: user._id}, 'super_admin_key', {expiresIn: '7d'}, (err, token)=> {
                        res.cookie("myCookie", token, {maxAge: 604800000, httpOnly: true}).json({
                           login_time: Date.now(), isAuth: true, isAdmin: true, user_id: user._id, admin_id: user._id
                        })
                    })
                }
                else{
                    jwt.sign({user_id:user._id}, 'user_key', {expiresIn: '7d'}, (err, token)=> {
                        res.cookie("myCookie", token, {maxAge: 604800000, httpOnly: true}).json({
                            login_time: Date.now(), isAuth: true, isAdmin: false, user_id: user._id
                        })
                    })
                }
            }
        }
        if(errors.length > 0){
            res.json({err: errors})
        }
    })

    // app.post("/api/checkAdminLogin", (req, res) =>{
    //     jwt.verify(req.cookies.myCookie, 'super_admin_key', (err, decoded) => {
    //         if(err){
    //             //If error send Forbidden (403)
    //             res.sendStatus(403);
    //         } else {
    //             //If token is successfully verified, we can send the autorized data 
    //             console.log("admin is logged in")
    //             res.json({isAuth: true, isAdmin: true})
    //         }
    //     })
    //     if(user){
    //         res.json({isAuth: true, isAdmin: false})
    //     }
    //     else{
    //         res.json({isAuth: false, isAdmin: false})
    //     }
        
    // }),

    // app.post("/api/checkUserLogin", async (req, res) =>{
    //     jwt.verify(req.cookies.myCookie, 'user_key', (err, decoded) => {
    //         if(err){
    //             //If error send Forbidden (403)
    //             res.sendStatus(403);
    //         } else {
    //             console.log("user is logged in")
    //             res.json({isAuth: true, isAdmin: false})
    //         }
    //     })
    //     let user = await User.findById(req.body.user_id)
    //     console.log(user)
    //     if(user){
    //         res.json({isAuth: true, isAdmin: false})
    //     }
    //     else{
    //         res.json({isAuth: false, isAdmin: false})
    //     }
    // })
}