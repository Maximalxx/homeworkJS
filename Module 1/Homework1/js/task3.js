'use strict';

let ADMIN_PASSWORD = 'qwerty';
let message = prompt('Введите пароль');

if (message == null) {
    console.log('Отмененно пользователем')
} else if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!')
} else if (message !== ADMIN_PASSWORD) {
    console.log('Доступ запрещен, неверный пароль!')
}

alert(message)