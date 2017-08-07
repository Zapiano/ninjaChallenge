function validateTextInput() {
  var allFieldsValid = true;
  var requiredTextInputs = document.getElementsByClassName("requiredTextInput");

  for(var i = 0; i < requiredTextInputs.length; i++){
    var input = requiredTextInputs[i];

    if (input.offsetLeft > 0) {
      var inputName = input.getAttribute('name');

      if (input.value === '') {
        input.className += ' error--required';
        document.querySelectorAll("[data-error='"+ inputName +"']")[0].style.display = 'block';
        allFieldsValid = false;
      } else {
        input.classList.remove("error--required");
        document.querySelectorAll("[data-error='"+ inputName +"']")[0].style.display = 'none';
      }
    }
  }

  return allFieldsValid;
}
