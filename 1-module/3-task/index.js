function ucFirst (str) {
  if (!str) {
    return str;
  } else {
      let strAsArr = str.split('');
      strAsArr[0] = strAsArr[0].toUpperCase();
      return strAsArr.join('');
  }
}