"use strict";

const $ = function (foo) {
    return document.getElementById(foo);
}

let dice1 = $("myDice");
let dice2 = $("myDice1");
let dice3 = $("myDice2");
let dice4 = $("myDice3");
let dice5 = $("myDice4");


let array = [];
for(let i = 0; i < 5; i++) {
    function roll (foo) {
        return Math.floor(Math.random() * foo) + 1;
    }
    array[i]=roll(6);
}

dice1.innerHTML = array[0];
dice2.innerHTML = array[1];
dice3.innerHTML = array[2];
dice4.innerHTML = array[3];
dice5.innerHTML = array[4];
