'use strict';

const checkForSpam = function (message) {
    // if (message.includes('spam'.toLocaleLowerCase || 'sale'.toLocaleLowerCase)) {
    //     return true
    // } else {
    //     return false
    // }
    message = message.toLowerCase();
    const spamWord1 = 'spam';
    const spamWord2 = 'sale';

    if (message.includes(spamWord1 || spamWord2)) {
        return true
    } else {
        return false
    }
};


console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true