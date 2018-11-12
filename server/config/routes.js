const controller = require('../controller/players');
const path = require('path');

module.exports = function(app) {
    app.get('/api/players/', controller.getAllPlayers);
    app.get('/api/game/:num', controller.getGameById);
    app.get('/api/games', controller.getGames);
    app.post('/api/new_player', controller.createPlayer);
    app.post('/api/new_game', controller.createGame);
    app.put('/api/update/:gameNumber', controller.updateStatus);
    app.delete('/api/delete/:id', controller.deletePlayer);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../public/dist/public/index.html"))
    });
}