const screenTxt = document.getElementById("screen-txt");
const numButtons = document.querySelectorAll(".num");
const operators = document.querySelectorAll("#plus, #minus, #Multiply, #divide");
const pointBtn = document.getElementById("point");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

let currentInput = "";
let result = null;

numButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentInput += btn.innerText;
    screenTxt.textContent = currentInput;
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentInput === "") return;
    currentInput += ` ${btn.innerText} `;
    screenTxt.textContent = currentInput;
  });
});

pointBtn.addEventListener("click", () => {
  currentInput += ".";
  screenTxt.textContent = currentInput;
});

equalBtn.addEventListener("click", () => {
  try {
    result = eval(currentInput);
    screenTxt.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    screenTxt.textContent = "خطا";
    currentInput = "";
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  result = null;
  screenTxt.textContent = "";
});
