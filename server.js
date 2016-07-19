'use strict';

const logger = require("./logger");
const routes = require('./routes');
const models = require('./models/config');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})

logger.debug("Overriding 'Express' logger");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('combined', { "stream": logger.stream }));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', routes.getHomePage);
app.get('/meals', routes.getMeals);
app.post('/meals', routes.postMeal);

app.listen(port);
console.log("listening on " + port + "!");
