let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user2 = {
  "balance": "$1,654.432",
  "picture": "https://placehold.it/32x32",
  "age": 25,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let users = [user1, user2];

let result = showSalary(users, 30);


function showSalary(users, age) {
  return users.filter(user => user.age<= age).map(user =>`${user.name}, ${user.balance}`).join('\n');
}
console.log(result);
