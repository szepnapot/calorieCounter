'use strict';

window.onload = init;

function init(){
  domElements.addButton.addEventListener('click', domFunctions.postMeal);
  domElements.confirmDeleteButton.addEventListener('click', domFunctions.deleteMeal);
  domElements.filterButton.addEventListener('click', domFunctions.getDate);
  domElements.listAllButton.addEventListener('click', domFunctions.getMeals);
  domFunctions.getMeals();
}
