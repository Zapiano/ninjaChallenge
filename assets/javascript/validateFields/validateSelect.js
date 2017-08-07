function validateSelect() {
  var allFieldsValid = true;
  var requiredSelects = document.getElementsByClassName("requiredSelect");

  for(var i = 0; i < requiredSelects.length; i++){
    var select = requiredSelects[i];
    var selectName = select.getAttribute('name');

    if (select.value === '') {
      select.className += ' error--required';
      document.querySelectorAll("[data-error='"+ selectName +"']")[0].style.display = 'block';
      allFieldsValid = false;
    } else {
      select.classList.remove("error--required");
      document.querySelectorAll("[data-error='"+ selectName +"']")[0].style.display = 'none';
    }
  }

  return allFieldsValid;
}
