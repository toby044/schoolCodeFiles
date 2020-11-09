"use strict";
let array = [];

function throwDice () {
    return Math.floor(Math.random()* 6) + 1;
}

let result = throwDice();

document.getElementById("myDice").innerHTML = result;

window.addEventListener("load" , throwDice);

array.push(result);

for(i = array[0]; array.length > 5}; i++) {
    return Math.floor(Math.random()*6) +1;
}