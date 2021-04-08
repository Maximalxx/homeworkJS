'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {

    login.split("");
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }

};

const isLoginUnique = function (allLogins, login) {

    login.split("");
    if (allLogins.includes(login)) {
        return false
    } else {
        return true
    }

};

const addLogin = function (allLogins, login) {

    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            console.log("Логин успешно добавлен!");
            return logins.push(login);
        } else {
            return console.log("Такой логин уже используется!");
        }
    } else {
        return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    }

};

(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'