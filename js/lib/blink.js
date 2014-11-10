var blinks = document.querySelectorAll('blink');
var visible = true;

var anchor = blinks[0].children[0];
anchor.style.color = "#000080";
anchor.style.fontSize = '32px';

setInterval(function () {
    visible = !visible;
    for (var i = 0; i < blinks.length; i++) {
        blinks[i].style.visibility = visible ? 'visible' : 'hidden';
    }
}, 500);

// senor javascript developer

