



module.exports = (function(){
  'use strict';
  let models = require('./models/config');

  function index(req, res){
    res.render('index');
  };

  function postMeal(req, res) {
    console.log(req.body);
    let newMeal = new models.meal();

    newMeal.name = req.body.name;
    newMeal.calories = req.body.calories;
    newMeal.date = req.body.date;
    newMeal.save(function(err) {
    if (err)
        res.sendStatus('404',err);

    res.json({status: "ok"});
  });
}

  return {
    getHomePage: index,
    postMeal: postMeal
  }
})();
