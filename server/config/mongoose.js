const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/team_manager', { useNewUrlParser: true } );