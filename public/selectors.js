const domElements = (function() {
  'use strict';

  return {
    inputField: document.querySelector('.input-group'),
    addButton: document.querySelector('button'),
    alertBox: document.querySelector('.alert-danger'),
    successBox: document.querySelector('.alert-success'),
    inputName: document.querySelector('.name'),
    inputCalories: document.querySelector('.calories'),
    inputDate: document.querySelector('.date')
  }

})();
