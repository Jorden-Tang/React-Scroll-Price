const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    eventType: {type: String, required: [true, 'please specify boss event type']},
    host_id: {type: String},
    hostIGN : {type: String, required: [true, 'please enter host ign']},
    buyer: [String],
    startTime: {type: Date, required:[true, 'need start time for new event']},
    description: {type: String, lowercase: true},
}, {timestamps: true});

const Event = mongoose.model("Event", eventSchema)
module.exports = Event