'use strict';

const user = {};

user.userName = 'Max';
user.age = 15;

user.showUserName = user.userName;
user.updateAge = user.age + 1;


console.log(user.showUserName);
console.log(user.updateAge)