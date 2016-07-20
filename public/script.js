'use strict';

window.onload = init;

function init(){
  domElements.addButton.addEventListener('click', domFunctions.postMeal);
  domFunctions.getMeals();
}
