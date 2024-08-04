"use strict";
const numEls = document.querySelectorAll(".num");
const screenEl = document.querySelector("#screen-txt");
const dotEl = document.querySelector("#point");
const plusEl = document.querySelector("#plus");
const minusEl = document.querySelector("#minus");
const multiplyEl = document.querySelector("#Multiply");
const divideEl = document.querySelector("#divide");
const clearEl = document.querySelector("#clear");
const equalEl = document.querySelector("#equal");
const btnEls = document.querySelectorAll("button");

for (let i = 0; i < btnEls.length; i++) {
  btnEls[i].addEventListener("mousedown", () => {
    btnEls[i].style.opacity = ".5";
  });
  btnEls[i].addEventListener("mouseup", () => {
    btnEls[i].style.opacity = "1";
  });
  btnEls[i].addEventListener("click", () => {
    if (btnEls[i] != equalEl) {
      screenEl.innerHTML += btnEls[i].innerHTML;
    }
  });
}

clearEl.addEventListener("click", () => {
  screenEl.innerHTML = "";
});

equalEl.addEventListener("click", () => {
  screenEl.innerHTML = eval(screenEl.innerHTML);
});
