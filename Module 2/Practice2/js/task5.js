'use strict';

const myAverageScore = function (Array) {

    let result = 0;
    for (const number of Array) {
        result += number;
    }

    result = result / Array.length;
    console.log(result);

    if (result >= 91 && result <= 100) {
        console.log('My average score : A');
    } else if (result >= 81 && result <= 90) {
        console.log('My average score: B');
    } else if (result >= 71 && result <= 80) {
        console.log('My average score: C');
    } else if (result <= 70) {
        console.log('My average score: D');
    }

}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));