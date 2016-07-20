
module.exports = (function() {
  'use strict';
  const mongoose = require('mongoose');

  const dbUrl = 'mongodb://admin:adminTest@ds023315.mlab.com:23315/meals';
  mongoose.connect(dbUrl);
  let Schema = mongoose.Schema;

  let mealSchema = new Schema({
      name: String,
      calories: Number,
      date: Date
  });

  let model = mongoose.model('Meal', mealSchema);

  return {
    mongoose: mongoose,
    url: dbUrl,
    mealSchema: model
  }

})();
