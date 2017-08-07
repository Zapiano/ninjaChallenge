function createTextarea(fieldInfo) {
  var textarea = document.createElement('textarea');

  textarea.setAttribute('name', fieldInfo.name);
  textarea.setAttribute('placeholder', fieldInfo.placeholder);

  if (fieldInfo.required) { textarea.className += 'requiredTextarea'; }

  return textarea;
}
