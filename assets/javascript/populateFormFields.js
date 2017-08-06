function populateFormFields(requestFields, formId) {
  var requestForm = document.getElementById(formId);

  requestFields.forEach(function(value, index, array) {
    var formField = document.createElement('div');
    var fieldLabel = document.createElement('label');

    formField.className += 'formField';

    fieldLabel.textContent = value.label;

    formField.appendChild(fieldLabel);
    requestForm.appendChild(formField);
  });
}
