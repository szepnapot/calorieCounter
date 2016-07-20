const domFunctions = (function() {
  'use strict';

  function showAlert(){
    domElements.alertBox.classList.remove("hidden");
    setTimeout(function(){
      domElements.alertBox.classList.add("hidden");
    }, 3000);
  }

  function showSuccess(){
    domElements.successBox.classList.remove("hidden");
    setTimeout(function(){
      domElements.successBox.classList.add("hidden");
    }, 3000);
  }

  function getMeals(){
    ajax.makeRequest('GET', '', '', fillTable);
  }

  function fillTable(err, meals){
    if (err) {
      showAlert();
      return
    }
    makeRows(meals);
  }

  function makeRows(meals) {
    meals.forEach(function(meal){
      domElements.table.appendChild(fillRow(meal));
    });
  }

  function addDeleteButton(parent){
    const button = document.createElement('div');
    button.className = 'deleteButton';
    button.innerHTML = domElements.deleteButton;
    parent.appendChild(button);
  }

  function fillRow(meal) {
    let row = document.createElement('tbody');
    for (var key in meal) {
      if (meal.hasOwnProperty(key)) {
        if (key !== '_id' && key !== '__v') {
          let column = createColumn(meal[key]);
          row.className = meal._id;
          row.appendChild(column);

        }
      }
    }
    // addDeleteButton(row);
    return row;
  }

  function createColumn(text) {
    let column = document.createElement('td')
    column.textContent = text;
    return column;
  }

  function getInputValues(){
    let newMeal = {name: domElements.inputName.value,
                  calories: domElements.inputCalories.value,
                  date: domElements.inputDate.value};
    resetInput([domElements.inputName,
                domElements.inputCalories,
                domElements.inputDate]);
    return newMeal;
  }

  function resetInput(inputFields){
    inputFields.forEach(function(input){
      input.value = '';
    })
  }

  function errorHandler(err, cont){
    if (err || cont === 'Incorrect format!') {
      showAlert();
      return;
    }
    showSuccess();
    return;
  }

  function postMeal(event){
    event.preventDefault();
    let newMeal = getInputValues();
    ajax.makeRequest('POST', '', newMeal, errorHandler);
  }

  return {
    alert: showAlert,
    success: showSuccess,
    getInput: getInputValues,
    resetInput: resetInput,
    postMeal: postMeal,
    getMeals: getMeals
  }

})();
