'use-strict';

// On load animation
function target(selector, parent = document) {
    return parent.querySelector(selector);
};

function targetAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
};

// the other way we did yesterday it spit out a console error so googled a new way to handle it
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
};
  
let button = target(".button");
let body = document.body;
let audio = target("#audio");

onEvent("click", button, () => {
  body.classList.toggle("on");
  audio.play();
});
