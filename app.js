"use strict";
window.addEventListener("load", start);

let number = 0;

function start() {
  console.log("start");
  document.querySelector("#btn-increment").addEventListener("click", increase);
  document.querySelector("#btn-decrement").addEventListener("click", decrease);
}
function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = `tallet er nu: ${number}`;
  console.log("message");
  document.querySelector("#message").textContent = message;
}
function increase() {
  console.log(increase);
  number = number + 1;
  displayNumber();
}

function decrease() {
  console.log(decrease);
  number = number - 1;
  displayNumber();
}
