const Event = require('../models/event.model')

module.exports = {
    createNewEvent(req, res){
        Event.create(req.body)
            .then( (newEvent) => res.json({newEvent: newEvent}))
            .catch((err) => res.status(400).json({message: "error creating Event", error: err}))
    }
}