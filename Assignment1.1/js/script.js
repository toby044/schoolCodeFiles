"use strict";
let btn = document.getElementById("btn");
function throwDice () {
    return Math.floor(Math.random()* 6) + 1;
}
let result = throwDice();
document.getElementById("myDice").innerHTML = result;
window.addEventListener("load" , throwDice);