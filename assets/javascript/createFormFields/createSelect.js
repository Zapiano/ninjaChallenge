function createSelect(fieldInfo) {
  var select = document.createElement('select');
  select.setAttribute('name', fieldInfo.name);
  options = fieldInfo.values;
  if (fieldInfo.required) { select.className += 'requiredSelect'; }

  var maskOption = document.createElement('option');
  maskOption.textContent = fieldInfo.mask;
  maskOption.setAttribute('value', '');
  select.appendChild(maskOption);

  for (var value in options) {
    var option = document.createElement('option');

    option.textContent = value;
    option.setAttribute('value', value);

    select.appendChild(option);
  };

  return select;
}
