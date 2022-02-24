function namify(users) {
 let arrName = [];
 for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let name = user.name;
    arrName.push(name);
 }
 return arrName;
}