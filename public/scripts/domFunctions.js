const domFunctions = (function() {
  'use strict';

  let deleteId;

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

  function showDeleteSuccess(){
    domElements.infoBox.classList.remove("hidden");
    setTimeout(function(){
      domElements.infoBox.classList.add("hidden");
    }, 3000);
    getMeals();
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

  function sumCalories(){
    let calories = [];
    const calorieColumns = document.querySelectorAll('td.calories');
    for (let i = 0, ref = calories.length = calorieColumns.length; i < ref; i++) {
     calories[i] = parseInt(calorieColumns[i].textContent);
    }
    domElements.totalCalories.textContent = calories.reduce((a,b) => a+b, 0);
  }

  function makeRows(meals) {
    emptyTable();
    meals.forEach(function(meal){
      domElements.tableBody.appendChild(fillRow(meal));
    });
    sumCalories();
  }

  function addDeleteButton(parent){
    const button = document.createElement('div');
    button.className = 'deleteButton';
    button.innerHTML = domElements.deleteButtonInnerHTML;
    button.addEventListener('click', function(event) {
      deleteId;
      deleteId = event.target.parentNode.parentNode.className;
    });
    parent.appendChild(button);
  }

  function getCorrectDateFormat(event) {
    let selectedDate = event.target.offsetParent.firstElementChild.value.split('-');
    let date = new Date;
    let formattedDate = new Date(selectedDate[0], selectedDate[1] - 1, selectedDate[2], date.getHours(), date.getMinutes());
    filterMeals(formattedDate.toJSON().substring(0, 10));
  }

  function encodeData(date) {
    let data = { 'filter': 'true', 'day': date};
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}

  function filterMeals(dateOfDay){
    ajax.makeRequest('GET', '?' + encodeData(dateOfDay), '', fillTable);
  }

  function deleteMeal(event) {
    ajax.makeRequest('DELETE', '/' + deleteId, '', showDeleteSuccess);
    getMeals();
  }

  function emptyTable(){
    domElements.tableBody.innerHTML = '';
  }

  function fillRow(meal) {
    let row = document.createElement('tr');
    for (var key in meal) {
      if (meal.hasOwnProperty(key)) {
        if (key !== '_id' && key !== '__v') {
          let column = createColumn(key, meal[key]);
          row.className = meal._id;
          row.appendChild(column);
        }
      }
    }
    addDeleteButton(row);
    return row;
  }

  function createColumn(key, value) {
    let column = document.createElement('td')
    column.className = key;
    if (key === 'date') {
      column.textContent = value.substring(0, 10);
      return column;
    }
    column.textContent = value;
    return column;
  }

  function getInputValues(){
    let inputDate = domElements.inputDate.value.split('-');
    let year = new Date().getUTCFullYear();
    let newMeal = {name: domElements.inputName.value,
                  calories: domElements.inputCalories.value,
                  date: new Date(year, inputDate[0], inputDate[1] - 30).toJSON()};
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
    getMeals();
  }

  return {
    alert: showAlert,
    success: showSuccess,
    getInput: getInputValues,
    resetInput: resetInput,
    postMeal: postMeal,
    getMeals: getMeals,
    deleteMeal: deleteMeal,
    getDate: getCorrectDateFormat
  }

})();
