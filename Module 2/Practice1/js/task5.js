'use strict';

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-рол');
console.log(styles);
styles.splice(1, 1, 'Класика');
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Реп', 'Регі');
console.log(styles);