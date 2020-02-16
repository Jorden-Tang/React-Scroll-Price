const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
module.exports = (app) =>{
    app.post("/login", (req,res) =>{
        console.log(req.fields)
        User.find({email: req.fields.email, password: req.fields.password})
            .then(console.log)
            .catch(console.log)
        // userController.findUserByEmail(req,res)
        //     .then(console.log)
        //     .catch(console.log)
    });
}