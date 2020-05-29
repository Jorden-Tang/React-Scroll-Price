const Event = require('../models/event.model')
const User = require('../models/User.model')

module.exports = {
    createNewEvent(req, res){
        console.log(req.body)
        Event.create(req.body)
            .then((newEvent) => res.json({newEvent: newEvent}))
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
        let buyer = await User.findById(req.body.user_id);
        let current_event = await Event.findById(req.id);
        current_event.buyer.push(buyer);
        req.json({message: "Successfully Joined Event"});
    }
}