const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    position: {type: String, default: ""},
    status: {type: String, default: "undecided" }
}, {timestamps:true});


module.exports = {
    playerModel: mongoose.model('Player', PlayerSchema),
    playerSchema: PlayerSchema
}