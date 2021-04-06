'use strict';

const user = {};

user.userName = 'Max';
user.age = 15;

user.showUserName = function () {
    return this.userName
};
user.updateAge = function () {
    return this.age += 1

}
console.log(user.showUserName());
console.log(user.updateAge())
console.log(user.updateAge())
console.log(user.updateAge())

// const user = {};

// user.showUserName = function (userName) {
//     userName = 'Max';
//     return userName
// }

// user.updateAge = function (userAge) {
//     for (let userAge = 16; userAge++;) {
//         return userAge
//     }
// };

// console.log(user.showUserName());
// console.log(user.updateAge());

// const user = {};

// user.userName = 'Max';
// user.age = 16;

