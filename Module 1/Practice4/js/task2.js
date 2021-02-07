'use strict'

let maxAge = 100;

if (maxAge >= 0 && maxAge <= 16) {
    alert('діти')

} else if (maxAge >= 17 && maxAge <= 60) {
    alert('дорослі')

} else if (maxAge >= 61 && maxAge <= 100) {
    alert('пінсіонери')
}