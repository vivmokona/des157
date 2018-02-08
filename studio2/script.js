"use strict";

/*Phone JS*/
var question1 = document.getElementById('question1');
var phoneoverlay = document.getElementById('phoneoverlay');
var close = document.getElementById('close');

question1.addEventListener('click', function () {
    phoneoverlay.style.display = 'block';
});

close.addEventListener('click', function () {
    phoneoverlay.style.display = 'none';
});

/*Pen JS*/
var question2 = document.getElementById('question2');
var penoverlay = document.getElementById('penoverlay');
var close2 = document.getElementById('close2');

question2.addEventListener('click', function () {
    penoverlay.style.display = 'block';
});

close2.addEventListener('click', function () {
    penoverlay.style.display = 'none';
});

/*Keys JS*/
var question3 = document.getElementById('question3');
var keysoverlay = document.getElementById('keysoverlay');
var close3 = document.getElementById('close3');

question3.addEventListener('click', function () {
    keysoverlay.style.display = 'block';
});

close3.addEventListener('click', function () {
    keysoverlay.style.display = 'none';
});
