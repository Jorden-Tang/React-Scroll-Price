const User = require('../models/User.model')

module.exports = {
    createNewUser(req,res){
        User.create(req.body)
            .then((newUser) => res.json({result: newUser}))
            .catch((err)=> res.result(400).json({message: "error creating new user", error: err}));
    },

    findUserByEmail(req,res){
        User.find({email: req.mail})
            .then((foundUser)=> res.json({result: foundUser}))
            .catch((err)=> res.status(400).json({message: "error finding user by email", error: err}))
    },

    updateUser(req, res){
        User.findOneAndUpdate({_id: req.params.id}, req.body)
            .then((updatedUser)=> res.json({result: updatedUser}))
            .catch((err)=> res.status(400).json({message: "error updating user information", error: err}))
    },
    
    deleteUser(req, res){
        User.deleteOne({_id: req.params.id})
            .then((result)=> res.json({message: "User delete success!", result: result}))
            .catch((err)=>res.status(400).json({message: "error deleting User", error: err}))
    },
}