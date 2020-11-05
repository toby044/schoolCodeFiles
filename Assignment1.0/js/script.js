'use strict';
const c2f = function () {
    let fahr;
    let celsius;

    let lower = 0;
    let upper = 300; //change this to increase/decrease the limit of the conversion
    let step = 10; //change this to increase/decrease the celsius rise

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrehheit</th></tr>';
    celsius = lower;
    while (celsius <= upper) {
        fahr = 9 / 5 * (celsius) + 32;   // the conversion formula
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        celsius = celsius + step;
    }
    s += '</table>';
    return s;
}

