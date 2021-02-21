'use strict';

let input;
let total = 0;

do {
    input = prompt('Введіть число :');
    if (input === null) {
        break;
    }
    input = Number(input);
    if (Number.isNaN(input)) {
        alert('Ви ввели букву, а не число!!!')
        continue;
    }
    total += input;
    console.log(input);
} while (true);
alert(`Загальна сума чисел дорівнює ${total}`);