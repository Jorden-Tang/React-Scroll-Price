const mongoose = require('mongoose')
const user = require('./User.model')

const buyerSchema = new mongoose.Schema({
    buyer_id: {},
    buyer_name: {type: String},
})

const hostSchema = new mongoose.Schema({
    host_id: {},
    host_name: {type: String}
})
const eventSchema = new mongoose.Schema({
    eventType: {type: String, required: [true, 'please specify boss event type'], lowercase: true},
    host: {type: hostSchema},
    hostIGN : {type: String, required: [true, 'please enter host ign'], lowercase: true},
    buyer: [buyerSchema],
    startTime: {type: Date, required:[true, 'need start time for new event']},
    endTime: {type: Date, required: [true, 'need end time for new event']},
    description: {type: String, lowercase: true},
}, {timestamps: true});

const Event = mongoose.model("Event", eventSchema)
module.exports = Event