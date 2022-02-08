function isEmpty(obj) {
 
  return !Object.keys(obj).length
}

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );