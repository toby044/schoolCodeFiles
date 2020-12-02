'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}
const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}
const rollm = function () {
    let dicedivs = document.getElementsByClassName('die');
    for (let i = 0; i < NOOFDICE; ++i) {
        if (!frozen[i]) {
            let r = roll(6);
            dicedivs[i].innerHTML = r;
            dice[i] = r;               // record the roll
        }
    }
    console.log(dice);
    console.log(frozen);
}

const record = function () {
                                       // let's do the magic
    magic = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < NOOFDICE; ++i); {
        magic[dice[i]]++;
        magic[0] += dice;
    };
    btn.removeEventListener('click', play);
    btn.style.backgroundColor = 'pink';
    console.log('kilroy was here, scoring');
    setTimeout( function () {
        btn.addEventListener('click', play);
        btn.style.backgroundColor = 'white';
        }, 10000);
    // create a function here that scores 1-6'es
};

const play = function () {
        if (++plays % PLAYS !== 0) {
            console.log('regular');
            rollm();
        } else {
            console.log('record force, record');
            rollm();
            record();
        }
};

const freeze = function (e) {
    let i = e.target.id.charAt(e.target.id.length - 1)
    if (frozen[i]) {
        e.target.style.backgroundColor = 'white';
        frozen[i] = false;
    } else {
        e.target.style.backgroundColor = 'lightblue';
        frozen[i] = true;
    }
};

const makeDie = function (i) {
    let die = document.createElement('div');
    die.setAttribute('class', 'die');
    die.setAttribute('id', 'n'+i);
    die.addEventListener('click', freeze);
    return die;
};
const makeButton = function (text, handler) {
    let btn = document.createElement('button');
    let txt = document.createTextNode(text);
    btn.appendChild(txt);
    btn.addEventListener('click', play);
    return btn;
};

const NOOFDICE = 5;
const PLAYS = 3;
let plays = 0;
let dice = [];
let frozen = [];
let btn;
for (let i = 0; i < NOOFDICE; ++i) {
    dice.push(0);
    frozen.push(false);
};

const makeScorePadSensitive = function(e) {
    for (let i = 0; i < 6; ++i){
        $('p' + (i +1)).addEventListener('click', function(e) {
            let j = e.target.id.charAt(e.target.id.length -1);
            $(e.target.id).innerHTML = magic[j];
        });
    };
};

const doThis = function () {
    for (let i = 0; i < NOOFDICE; ++i) {
        $('diceCup').appendChild(makeDie(i));
    }
    btn = makeButton('Roll');
    $('main').appendChild(btn);
    $('cpryear').innerHTML = `&copy; nml ${new Date().getFullYear()}`;
    makeScorePadSensitive();
    play();
};

window.addEventListener('load', doThis);