const Scroll = require('../models/scroll.model')

module.exports = {
    createNewScroll(req, res){
        Scroll.create(req.body)
            .then( (newScroll) => res.json({newScroll: newScroll}))
            .catch((err) => res.status(400).json({message: "error creating sroll", error: err}))
    },
    getAllScroll(req, res){
        Scroll.find().sort({scrollEquipment: 1})
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
    async createOrUpdateScroll(req, res){
       const scrolls = req.body.scrolls;
       for (const scroll of scrolls){
        const {scrollEquipment, scrollStat, scrollPrice, scrollSuccessRate} = scroll;
        let result = await Scroll.findOne({scrollEquipment: scrollEquipment, scrollStat: scrollStat, scrollSuccessRate})
        // if such scroll already exist
         if(result){
             if(result.scrollPrice.length === 8){
                 //when price trend is decreasing
                 if(scrollPrice < result.scrollPrice[result.scrollPrice.length/2]){
                     result.scrollPrice.pop();
                 }
                 //when price trend is increasing
                 else{
                     result.scrollPrice.shift();
                 }
             }
             result.scrollPrice.push(scrollPrice);
             result.scrollPrice.sort(function(a,b){
                 if(a > b){
                     return 1;
                 }
                 else if(a < b){
                     return -1;
                 }
                 else{
                     return 0;
                 }
             });
             await result.save();
         }
         //such scroll doesn't exist
         else{
           await Scroll.create(scroll)
                 .then( (newScroll) => res.json({newScroll: newScroll}))
                 .catch((err) => res.status(400).json({message: "error creating sroll", error: err}))
         }
       }
    }
}