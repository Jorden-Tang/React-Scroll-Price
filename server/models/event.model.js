const mongoose = require('mongoose')
const user = require('./User.model')
const eventSchema = new mongoose.Schema({
    eventTitle: {type: String, required: [true, 'need to specify boss event type'], lowercase: true},
    host: {type: user, required: [true, 'need host for boss party']},
    buyer: [user],  
}, {timestamps: true})

const Event = mongoose.model("Event", eventSchema)
module.exports = Event;