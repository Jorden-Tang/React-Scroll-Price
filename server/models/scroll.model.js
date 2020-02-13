const mongoose = require('mongoose')

const scrollSchema = new mongoose.Schema({
    scrollEquipment: {type: String, required: [true, 'Need to specify equipment!']},
    scrollStat: {type:String , required: [true, 'Need to specify stat!']},
    scrollSuccessRate:{type: Number , required: [true, 'Need to specify success rate!']},
    scrollPrice: {type: [Number], default: []},
}, {timestamps:true})

const Scroll = mongoose.model("Scroll", scrollSchema)
module.exports = Scroll