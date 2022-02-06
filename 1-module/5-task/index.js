function truncate(str, maxlength) {
  let eos = "…";

  if (str.length > maxlength) {
    if (maxlength < eos.length) return eos;
    return (str.substr(0, maxlength - eos.length) + eos);
  }
  
  return str;
}
let input = truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
