const domElements = (function() {
  'use strict';

  const deleteButton = '<button type="button" class="btn btn-default btn-lg"> \
                        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete \
                        </button>'

  return {
    inputField: document.querySelector('.input-group'),
    addButton: document.querySelector('button'),
    alertBox: document.querySelector('.alert-danger'),
    successBox: document.querySelector('.alert-success'),
    inputName: document.querySelector('.name'),
    inputCalories: document.querySelector('.calories'),
    inputDate: document.querySelector('.date'),
    table: document.querySelector('table'),
    deleteButton: deleteButton
  }

})();
