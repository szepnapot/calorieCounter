const controller = function(queries){
  'use strict';
  const failedMessage = {status: "not exists"};

  function index(req, res){
    res.render('index');
  };

  function postMeal(req, res) {
    let newMeal = {name : req.body.name,
                    calories: req.body.calories,
                    date: req.body.date};
    queries.addMeal(newMeal, function(err, doc) {
      if (err) {
        res.status(404).send("Error: " + err);
        return;
      }
      res.json(doc);
    });
  }

  function listMeals(req, res) {
    if (req.query.filter) {
      queries.filterMeals(req.query.day, function(err, cont){
        if (err) {
          res.status(404).send("Error: " + err);
          return;
        }
        res.json(cont);
        return;
      })
      return;
    }
    queries.getAllMeals(function(err, cont){
      if (err) {
        res.status(404).send("Error: " + err);
        return;
      }
      res.json(cont);
      return;
    });
  }

  function deleteMeal(req, res) {
    queries.deleteMeal(req.params.id, function(err, cont){
      if (err) {
        res.status(404).json(failedMessage);
        return;
      }
      res.json(cont);
      return;
    })
  }

  return {
    getHomePage: index,
    getAll: listMeals,
    postMeal: postMeal,
    deleteMeal: deleteMeal
  }
};

module.exports = controller;
