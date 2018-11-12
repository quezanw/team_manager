const mongoose = require('mongoose');
const PlayerSchema = require('./player');


const GameSchema = new mongoose.Schema({
    number: {type: Number},
    players: [PlayerSchema.playerSchema]
}, {timestamps:true});

module.exports = mongoose.model('Game', GameSchema);