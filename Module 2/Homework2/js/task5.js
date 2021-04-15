'use strict';

const checkForSpam = function (message) {
    
    message = message.toLowerCase();
    const spamWord1 = 'spam';
    const spamWord2 = 'sale';

    if (message.includes(spamWord1) || message.includes(spamWord2)) {
        return true
    } else {
        return false
    }
};


console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true