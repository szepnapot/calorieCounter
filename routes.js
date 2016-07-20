const controller = function(queries){
  'use strict';
  const successfulPost = {status: "ok"};

  function index(req, res){
    res.render('index');
  };

  function postMeal(req, res) {
    let newMeal = {name : req.body.name,
                    calories: req.body.calories,
                    date: req.body.date};
    queries.addMeal(newMeal, function(err) {
      if (err) {
        res.status(404).send("Error: " + err);
        return;
      }
      res.json(successfulPost);
    });
  }

  function listMeals(req, res) {
    queries.getAllMeals(function(err, cont){
      if (err) {
        res.status(404).send("Error: " + err);
        return;
      }
      res.json(cont);
    });
  }

  // function deleteMeal(req, res) {
  //   queries.
  // }

  return {
    getHomePage: index,
    getAll: listMeals,
    postMeal: postMeal
  }
};

module.exports = controller;
