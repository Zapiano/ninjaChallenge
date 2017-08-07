function createField(fieldInfo) {
  switch(fieldInfo.type) {
    case "enumerable":
      if (fieldInfo.allow_multiple_value) {
        return createCheckbox(fieldInfo);
      } else {
        return createSelect(fieldInfo);
      };
    case "big_text":
      return createTextarea(fieldInfo);
    case "small_text":
      return createTextInput(fieldInfo);
    case "email":
      return createTextInput(fieldInfo, 'email');
    case "phone":
      return createTextInput(fieldInfo, 'tel');
    case "lat_long":
      return createTextInput(fieldInfo);
    default:
      return document.createElement('div');
  }
}
