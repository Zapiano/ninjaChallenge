function populateFormFields(requestFields, formId) {
  var requestForm = document.getElementById(formId);

  requestFields.forEach(function(value, i, a) {
    var fieldContainer = document.createElement('div');
    var label = document.createElement('label');

    fieldContainer.className += 'form-field';

    label.textContent = value.label;

    var field = createField(value);

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(field);
    requestForm.appendChild(fieldContainer);
  });
}

