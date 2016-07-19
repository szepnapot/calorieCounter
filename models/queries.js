
module.exports = (function() {
  'use strict';

  const database = require('./config');
  const mongoose = database.mongoose;
  const mealSchema = database.meal;
  const Meal = mongoose.model('Meal', mealSchema);

  mongoose.connect(database.url, function (error) {
    if (error) {
        console.log(error);
    }
    console.log("Database connection estabilished!");
  }
  );

  function getMeals(callback) {
    Meal.find({}, function (err, docs) {
      if (err) {
        callback(err, null)
      }
      callback(null, docs);
    });
  }

  return {
    meal: Meal,
    getMeals: getMeals
  }

})();
