const mongoose = require('mongoose')
const scrollSchema = new mongoose.Schema({
    scrollEquipment: {type: String, required: [true, 'Need to specify equipment!'], lowercase: true},
    scrollStat: {type:String , required: [true, 'Need to specify stat!'], lowercase:true},
    scrollSuccessRate:{type: Number , required: [true, 'Need to specify success rate!']},
    scrollPrice: {type: [Number], default: [0]},
}, {timestamps:true})

const Scroll = mongoose.model("Scroll", scrollSchema)
module.exports = Scroll