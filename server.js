'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const routes = require('./routes');
const models = require('./models/config');
const port = process.env.PORT || 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   res.contentType('application/json');
//   next();
// });

app.get('/', routes.getHomePage);
app.post('/meals', routes.postMeal);



app.listen(port);
console.log("listening on " + port + "!");
