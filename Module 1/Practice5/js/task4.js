'use strict';

let name = '';

do {
    name = prompt('Введіть ім’я свого улюбленого героя');
    console.log('Ім’я вашего героя : ', name);
    if (name.length > 6) {
        console.log("Имя слишком долгое");
        break
    }
} while (name.length < 6)