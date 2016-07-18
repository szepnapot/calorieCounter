module.exports = (function(){
  'use strict';
  let models = require('./models/config');

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
    if (err)
        console.log("\nError happened while saving. \
                      \nNot full body!\
                      \n");
        res.status(404);

    res.json({status: "ok"});
  });
}

  return {
    getHomePage: index,
    postMeal: postMeal
  }
})();
