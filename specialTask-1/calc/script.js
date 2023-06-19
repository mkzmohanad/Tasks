"use strict";
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();
    console.log(text);
    if (value === "clear") {
      display.textContent = "0";
    }else if (value === "=") {
      display.textContent = eval(text);
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});