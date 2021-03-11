'use strict';

const cafe = {
    name: 'Republic',
    width: 200,
    height: 300,
    personal: 5,
    hr: true
}

const keys = Object.entries(cafe);
console.log(keys);

const s = cafe.height * cafe.width;
console.log(s);