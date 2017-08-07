function validateCheckbox() {
  var allFieldsValid = true;
  var requiredCheckbox = document.getElementsByClassName("requiredCheckbox");


  for(var i = 0; i < requiredCheckbox.length; i++){
    var checkboxList = requiredCheckbox[i]
    var checkboxName = checkboxList.getAttribute('name');
    var checkboxs = document.getElementsByName(checkboxName);

    var len = checkboxs.length
    var validCheckbox = false;

    for(var i = 0; i < len; i++) {
      if(checkboxs[i].checked)
      {
        validCheckbox = true;
        break;
      }
    }

    if (!validCheckbox) {
      checkboxList.className += ' error--required';
      document.querySelectorAll("[data-error='"+ checkboxName +"']")[0].style.display = 'block';
      allFieldsValid = false;
    } else {
      checkboxList.classList.remove("error--required");
      document.querySelectorAll("[data-error='"+ checkboxName +"']")[0].style.display = 'none';
    }

  };

  return allFieldsValid;
}
