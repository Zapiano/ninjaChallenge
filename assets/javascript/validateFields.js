function validateFields () {
  validateCheckbox();
  validateSelect();
  validateTextInput();

  return validateTextInput() && validateCheckbox() && validateSelect();
}
