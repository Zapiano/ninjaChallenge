function createCheckbox(fieldInfo) {
  var checkboxList = document.createElement('ul');
  checkboxList.setAttribute('name', fieldInfo.name);
  if (fieldInfo.required) { checkboxList.className += 'requiredCheckbox'; }

  options = fieldInfo.values;

  var optionCount = 0;

  for (var value in options) {
    var listElement = document.createElement('li');
    var input = document.createElement('input');
    var label = document.createElement('label');


    input.setAttribute('type', 'checkbox');
    label.textContent = value;

    var optionId = fieldInfo.name + String(optionCount)
    optionCount += 1;

    input.setAttribute('id', optionId);
    input.setAttribute('name', fieldInfo.name);
    label.setAttribute('for', optionId);

    listElement.appendChild(input);
    listElement.appendChild(label);
    checkboxList.appendChild(listElement);
  };

  return checkboxList;
}
