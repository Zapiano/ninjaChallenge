function createTextInput(fieldInfo, type='text') {
  var input = document.createElement('input');

  input.setAttribute('type', type);
  input.setAttribute('placeholder', fieldInfo.placeholder);
  input.setAttribute('name', fieldInfo.name);

  if (fieldInfo.required) { input.classList.add('requiredTextInput'); };

  return input;
}
