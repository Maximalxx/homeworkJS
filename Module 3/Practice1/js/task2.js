'use strict';

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (const i in salaries) {
    sum += salaries[i];
}
console.log(sum);