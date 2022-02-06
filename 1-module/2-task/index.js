 function print(text) {
  console.log(text);
}

function isValid(name) {
    if(name && 
      (name.indexOf(' ') === -1) && 
      name.length >= 4) {
        return true;
  } else {
    return false
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');
  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
