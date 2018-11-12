var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/dist/public')));


require('./config/mongoose');
require('./config/routes')(app);

app.listen(8000, (err) => err ? console.log(err) : console.log("listening on port 8000"))