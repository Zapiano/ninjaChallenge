function createField(fieldInfo) {
  switch(fieldInfo.type) {
    case "enumerable":
      if (fieldInfo.allow_multiple_value) {
        return createCheckboxInput(fieldInfo);
      } else {
        return createSelectBox(fieldInfo);
      };
    case "big_text":
      return createTextarea(fieldInfo);
    case "small_text":
      return createTextInput(fieldInfo.placeholder);
    case "email":
      return createTextInput(fieldInfo.placeholder, 'email');
    case "phone":
      return createTextInput(fieldInfo.placeholder, 'tel');
    case "lat_long":
      return createTextInput(fieldInfo.placeholder);
    default:
      return document.createElement('div');
  }
}

function createCheckboxInput(fieldInfo) {
  var checkboxList = document.createElement('ul');
  checkboxList.setAttribute('name', fieldInfo.name);
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
    label.setAttribute('for', optionId);

    listElement.appendChild(input);
    listElement.appendChild(label);
    checkboxList.appendChild(listElement);

  };

  return checkboxList;
}

function createSelectBox(fieldInfo) {
  var select = document.createElement('select');
  select.setAttribute('name', fieldInfo.name);
  options = fieldInfo.values;

  for (var value in options) {
    var option = document.createElement('option');

    option.textContent = value;
    option.setAttribute('value', value);

    select.appendChild(option);
  };

  return select;
}

function createTextarea(fieldInfo) {
  var textarea = document.createElement('textarea');

  textarea.setAttribute('name', fieldInfo.name);
  textarea.setAttribute('placeholder', fieldInfo.placeholder);

  return textarea;
}

function createTextInput(placeholder, type='text') {
  var input = document.createElement('input');

  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);

  return input;
}

