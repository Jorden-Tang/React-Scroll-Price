const Event = require('../models/event.model')
const User = require('../models/User.model')

module.exports = {
    createNewEvent(req, res){
        Event.create(req.body)
            .then(async (newEvent) => {
                let host = await User.findById({_id: newEvent.host_id});
                host.hosted_events.push(newEvent._id);
                host.save();
                res.json({newEvent: newEvent})
        })
        .catch((err) => res.status(400).json({message: "error creating Event", error: err}))
    },
    updateEvent(req, res){
        Event.findOneAndUpdate({_id : req.params.id}, req.body)
            .then((updatedEvent)=> res.json({result: updatedEvent}))
            .catch((err)=> res.status(400).json({message: "error updating event", error: err}))
    },

    deleteEvent(req, res){
        Event.deleteOne({_id: req.params.id})
            .then((result)=> res.json({message: "User delete success!", result: result}))
            .catch((err)=>res.status(400).json({message: "error deleting Event", error: err}))
    },

    findAllEvent(req, res){
        Event.find()
            .then((allEvents) => res.json({result: allEvents}))
            .catch((err)=> res.status(400).json({message: "error finding all events", error: err}))
    },
    async joinEvent(req, res){
        let current_event = await Event.findById(req.params.event_id);
        let current_user = await User.findById(req.params.user_id);
        let type = req.body.buyerType;
        let IGN = req.body.buyerIGN;
  
        //finding empty spot and add
        for(let i = 0; i < current_event.buyers.length; i++){
            if(current_event.buyers[i]['buyerType'] === type && current_event.buyers[i]['buyerIGN'] === ''){
                (current_event.buyers)[i].buyerIGN = IGN;
                (current_event.buyers)[i].buyerType = type;
                (current_event.buyers)[i].buyerID = current_user._id;
                break;
            }
        }
        
        current_event.buyerCount -= 1;
        current_event.save();
        current_user.joined_events.push(current_event._id);
        current_user.save();
        console.log("user " + req.params.user_id + " " + current_user.name + "joined event "+ req.params.event_id);
        res.json({message: "joined event successfully"})
    },
    findEventById(req, res){
        Event.findById(req.params.id)
            .then((result) => res.json({result: result}))
            .catch((err)=> res.status(400).json({message: "error find event by id", error: err}))
    }
}