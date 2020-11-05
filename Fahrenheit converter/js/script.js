'use strict';
/* print conversion table
   fahrenheit to celsius */
const f2c = function () {
    let fahr;
    let celsius;

    let lower = 0;                       // define constants
    let upper = 1000;
    let step = 20;

    let s = '<table>';
    s += '<tr><th>Fahrenheit</th><th>Celsius</th></tr>';
    fahr = lower;
    while (fahr <= upper) {
        celsius = 5 / 9 * (fahr - 32);   // the conversion formula
        s += `<tr><td>${fahr}</td><td>${celsius}</td></tr>`;
        fahr = fahr + step;
    }
    s += '</table>';
    return s;
}

