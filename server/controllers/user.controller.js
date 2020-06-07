const User = require('../models/User.model');
const Event = require('../models/event.model')

module.exports = {
    createNewUser(req,res){
        User.create(req.body)
            .then((newUser) => res.json({result: newUser}))
            .catch((err)=> res.status(400).json({message: "error creating new user", error: err}));
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

    findAllUser(req,res){
        User.find()
            .then((all)=> res.json({result: all}))
            .catch((err)=> res.status(400).json({message: "error getting all user", error: err}))
    },

    async findHostedEvents(req, res){
        let current_user = await User.findById(req.params.id);
        let eventDataArray = [];
        for (let i = 0; i < current_user.hosted_events.length; i++){
            let event = await Event.findById((current_user.hosted_events)[i]);
            eventDataArray.push(event);
        }
        res.json({result: eventDataArray});
    },

    async findJoinedEvents(req, res){
        let current_user = await User.findById(req.params.id);
        let eventDataArray = [];
        for (let i = 0; i < current_user.joined_events.length; i++){
            let event = await Event.findById((current_user.joined_events)[i]);
            eventDataArray.push(event);
        }
        res.json({result: eventDataArray});
    },

    async leaveJoinedEvents(req, res){
        let current_user = await User.findById(req.params.user_id);
        let current_event = await Event.findById(req.params.event_id);
        
        current_user.joined_events  = current_user.joined_events.filter(v => v != req.params.event_id)
        // console.log(current_user);
        current_user.save();

        //remove buyer object from buyer array within event
        for(let i = 0; i < (current_event.buyers).length; i++){
            if((current_event.buyers)[i].buyerID === req.params.user_id){
                (current_event.buyers)[i].buyerID = '';
                (current_event.buyers)[i].buyerIGN = '';
                current_event.buyerCount += 1;
            } 
        }
        // console.log(current_event);
        current_event.save();
        res.json({left_event_id: req.params.event_id})
    }
}