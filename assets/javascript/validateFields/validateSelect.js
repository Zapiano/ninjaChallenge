function validateSelect() {
  var allFieldsValid = true;
  var requiredSelects = document.getElementsByClassName('requiredSelect');

  for(var i = 0; i < requiredSelects.length; i++){
    var select = requiredSelects[i];
    var selectName = select.getAttribute('name');

    // this is for preventing the execution of this code if element is not visible
    if (select.offsetLeft > 0) {
      if (select.value === '') {
        select.classList.add('error--required');
        document.querySelectorAll("[data-error='"+ selectName +"']")[0].style.display = 'block';
        allFieldsValid = false;
      } else {
        select.classList.remove("error--required");
        document.querySelectorAll("[data-error='"+ selectName +"']")[0].style.display = 'none';
      }
    }
  }

  return allFieldsValid;
}
