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
      return
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
    postMeal: postMeal
  }

})();
