
/// router

function postMeal(req, res, callback) {
  console.log("Request body: ", req.body);
  let newMeal = {name : req.body.name,
                  calories: req.body.calories,
                  date: req.body.date};
  callback(newMeal, errorHandler);
}

function errorHandler(err) {
  throws
}

//queries

function addMeal(meal) {

}
