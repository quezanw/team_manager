const Player = require('../models/player').playerModel;
const Game = require('../models/game');

module.exports = {
    getAllPlayers: function(req, res) {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json(err))
    },
    getGameById: function(req, res) {
        Game.findOne({number: req.params.num})
            .then(game => res.json(game))
            .catch(err => res.json(err))
    },
    createPlayer: function(req, res) {
        let player = new Player({
            name: req.body.name,
            position: req.body.position
        })
        player.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

        Game.updateMany({}, { $push: { players: player } }, {runValidators: true})
            .then(result => res.json(result))
            .catch(err => jes.json(err))
    },
    updateStatus: function(req, res) {
        console.log("Update status function")
        Game.updateOne( 
            {number: req.params.gameNumber, 'players._id': req.body.id},
            { $set: { 'players.$.status': req.body.gameStatus } }
        )
            .then(player => res.json(player))
            .catch(err => res.json({error:err, msg: "failed"}))
    },
    createGame: function(req, res) {
        let game = new Game({
            number: req.body.number
        })
        game.save()
            .then(result => res.json(result))
            .catch(err => jes.json(err))
    },
    deletePlayer: function(req, res) {
        Player.remove({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        Game.updateMany({}, 
            { $pull: 
                { players : {_id : req.params.id } } 
            })
            .then(result => res.json(result))
            .catch(err => jes.json(err))
    },
    getGames: function(req, res) {
        Game.find({})
            .then(games => res.json(games))
            .catch(err => res.json(err))
    }
}