'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число');
    if (input === null) break;
    input = Number(input);
    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(input);
    }
    console.log(input);
    console.log(numbers);
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    alert(`Общая сумма чисел равна ${total}`);
}