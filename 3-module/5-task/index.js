function getMinMax(str) {
  let arr = str.split(' ');
  arr = arr.filter(index => index == +index);
  
  return inputData = {
  min: Math.min(...arr),
  max: Math.max(...arr),
}
}
