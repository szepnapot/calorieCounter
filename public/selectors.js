const domElements = (function() {
  'use strict';

  const deleteButton = '<button type="button" class="btn btn-default btn-lg delete" data-toggle="modal" \
                        data-target="#deleteModal"> \
                        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete \
                        </button>'
  return {
    inputField: document.querySelector('.input-group'),
    addButton: document.querySelector('button'),
    alertBox: document.querySelector('.alert-danger'),
    successBox: document.querySelector('.alert-success'),
    infoBox: document.querySelector('.alert-info'),
    inputName: document.querySelector('.name'),
    inputCalories: document.querySelector('.calories'),
    inputDate: document.querySelector('.date'),
    table: document.querySelector('.table'),
    tableBody: document.querySelector('tbody'),
    deleteButtonInnerHTML: deleteButton,
    delete: document.querySelector('.delete'),
    confirmDeleteButton: document.querySelector('.yes'),
    filterButton: document.querySelector('.filter'),
    listAllButton: document.querySelector('.list-meals'),
    totalCalories: document.querySelector('#total')
  }

})();
