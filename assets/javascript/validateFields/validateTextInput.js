function validateTextInput() {
  var allFieldsValid = true;
  var requiredTextInputs = document.getElementsByClassName('requiredTextInput');

  for(var i = 0; i < requiredTextInputs.length; i++){
    var input = requiredTextInputs[i];

    // this is for preventing the execution of this code if element is not visible
    if (input.offsetLeft > 0) {
      var inputName = input.getAttribute('name');

      if (input.value === '') {
        input.classList.add('error--required');
        document.querySelectorAll("[data-error='"+ inputName +"']")[0].style.display = 'block';
        allFieldsValid = false;
      } else {
        input.classList.remove('error--required');
        document.querySelectorAll("[data-error='"+ inputName +"']")[0].style.display = 'none';
      }
    }
  }

  return allFieldsValid;
}
