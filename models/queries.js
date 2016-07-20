const queries = function(schema){
  'use strict';

  const mongoose = schema.mongoose;
  const mealSchema = schema.mealSchema;
  const Meal = mongoose.model('Meal', mealSchema);

  function getMeals(cb) {
    Meal.find({}, function (err, docs) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, docs);
      return;
    });
  };

  function addMeal(meal, cb) {
    let newMeal = new Meal(meal);
    newMeal.save(function(err) {
      if (err) {
        cb(err);
        return;
      }
      cb(null);
      return;
    });
  };

  function deleteMeal(id, cb) {
    Meal.remove({_id: id}, function(err) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, "removed");
      return;
    })
  }

  return {
    getAllMeals: getMeals,
    addMeal: addMeal
  };
};

module.exports = queries;
