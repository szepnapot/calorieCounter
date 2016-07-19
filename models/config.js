module.exports = (function() {
  'use strict';
  const mongoose = require('mongoose');

  const dbUrl = 'mongodb://admin:adminTest@ds023315.mlab.com:23315/meals';

  let Schema = mongoose.Schema;

  let mealSchema = new Schema({
      name: String,
      calories: Number,
      date: Date
  });

  return {
    mongoose: mongoose,
    url: dbUrl,
    meal: mealSchema
  }

})();
