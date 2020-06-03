const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    eventType: {type: String, required: [true, 'please specify boss event type']},
    host_id: {type: String},
    hostIGN : {type: String, required: [true, 'please enter host ign']},
    buyerCount: {type: Number, required: [true, 'need '],  min: [1, "please enter positive integers for # of buyers"]},
    buyers: [],
    startTime: {type: Date, required:[true, 'need start time for new event']},
    description: {type: String, lowercase: true},
}, {timestamps: true});

const Event = mongoose.model("Event", eventSchema)
module.exports = Event