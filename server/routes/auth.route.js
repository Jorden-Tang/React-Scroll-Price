const userController = require("../controllers/user.controller")
const User = require("../models/User.model")
module.exports = (app) =>{
    app.post("/login", (req, res) =>{
        console.log(req.body)
        User.find({email: req.body.email})
            .then((result) => res.json({result: result}))
            .catch((err)=> res.json({error: err}))
    });

    // app.post("/login", console.log)
}