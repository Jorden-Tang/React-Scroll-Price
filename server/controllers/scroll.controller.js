const Scroll = require('../models/scroll.model')

module.exports = {
    createNewScroll(req, res){
        Scroll.create(req.body)
            .then( (newScroll) => res.json({newScroll: newScroll}))
            .catch((err) => res.status(400).json({message: "error creating sroll", error: err}))
    },
    getAllScroll(req, res){
        Scroll.find()
            .then((allScroll) => res.json({result: allScroll}))
            .catch((err)=> res.status(400).json({message: "error getting all scroll data", error: err}))
    },
    updateScroll(req, res){
        Scroll.findOneAndUpdate({_id: req.params.id}, req.body)
            .then((updatedScroll)=> res.json({result: updatedScroll}))
            .catch((err)=> res.status(400).json({message: "error updating scroll price", error: err}))
    },
    
    deleteScroll(req, res){
        Scroll.deleteOne({_id: req.params.id})
            .then((result)=> res.json({message: "delete success!", result: result}))
            .catch((err)=>res.status(400).json({message: "error deleting ", error: err}))
    },

    findScrollByEquipment(req,res){
        Scroll.find({scrollEquipment: req.params.equipment}, req.body)
            .then((scrolls) => res.json({result: scrolls}))
            .catch((err)=>res.status(400).json({message: "error finding scrolls by equipment type", error: err}))
    },
}