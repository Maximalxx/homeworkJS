'use strict';

const myNewArrowFunction = function (...rest) {
    return (rest);
}

console.log(myNewArrowFunction(1, 2, 3));
console.log(myNewArrowFunction(100, 200, 300, 400, 500));
console.log(myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"));