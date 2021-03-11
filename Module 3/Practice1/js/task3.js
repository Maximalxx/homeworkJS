'use strict';

const a = prompt('Введите 1 число');
const b = prompt('Введите 2 число');

const calculator = {

    a,
    b,

    sum() {
        const sum = Number(this.a) + Number(this.b);
        return sum
    },

    mult() {
        const mult = Number(this.a) * Number(this.b);
        return mult
    }

}

console.log(calculator.sum());
console.log(calculator.mult());