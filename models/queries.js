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
    newMeal.save(function(err, doc) {
      if (err) {
        cb(err, null);
        return;
      };
      cb(null, {status: "ok",
                meal: {
                      id: doc._id,
                      name: doc.name,
                      calories: doc.calories,
                      date: doc.date}});
      return;
    });
  };

  function deleteMeal(id, cb) {
    Meal.remove({_id: id}, function(err, doc) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, {status: "ok", meal: {"id": id}});
      return;
    })
  };

  function filterMealsByDay(date, cb) {
    let year = date.split('-')[0];
    let month = date.split('-')[1];
    let day = date.split('-')[2];
    Meal.find({"date": {"$gte": (new Date(date)).toISOString()}},
              function(err, doc) {
                if (err) {
                  cb(err, null);
                  return;
                };
                cb(null, doc);
                return;
              });
  };

  return {
    getAllMeals: getMeals,
    addMeal: addMeal,
    deleteMeal: deleteMeal,
    filterMeals: filterMealsByDay
  };
};

module.exports = queries;
