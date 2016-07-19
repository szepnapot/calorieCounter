module.exports = (function(){
  'use strict';
  let models = require('./models/queries');
  let successfulPost = {status: "ok"};

  function index(req, res){
    res.render('index');
  };

  function postMeal(req, res) {
    console.log("Request body: ", req.body);
    let newMeal = new models.meal();

    newMeal.name = req.body.name;
    newMeal.calories = req.body.calories;
    newMeal.date = req.body.date;
    newMeal.save(function(err) {
      console.log("Model: " + newMeal);
    if (err) {
        console.log("\nError happened while saving. \
                      \nNot full body!\
                      \n");
        res.status(404).send(JSON.stringify("Incorrect format!"));
        return;
      }
    res.json(successfulPost);
    });
  }

  function listMeals(req, res) {
    models.getMeals(function(err, docs){
      if (err) {
        console.log(err);
        res.status(404).send(JSON.stringify("Error during query!"));
        return;
      }
      res.json(docs);
    });

  }

  return {
    getHomePage: index,
    getMeals: listMeals,
    postMeal: postMeal
  }
})();
