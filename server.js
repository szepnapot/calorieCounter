'use strict';

const logger = require("./logger");
const dbConfig = require('./models/config');
const queries = require('./models/queries');
const Meal = queries(dbConfig);
const controller = require('./controller')(Meal);
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

const port = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
const oneDay = 86400000;

logger.debug("Overriding 'Express' logger");

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
};

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('combined', { "stream": logger.stream }));
app.use('/public', express.static(__dirname + '/public', { maxAge: oneDay }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression({filter: shouldCompress}));
app.get('/', controller.getHomePage);
app.get('/meals', controller.getAll);
app.post('/meals', controller.postMeal);
app.delete('/meals/:id', controller.deleteMeal);

app.listen(port);
console.log("listening on " + port + "!");
