const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
let currentInput = "";
let operator = "";
let firstValue = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.textContent;

    if (!isNaN(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      operator = "";
      firstValue = null;
      display.textContent = "0";
    } else if (value === "=") {
      if (operator && firstValue !== null && currentInput !== "") {
        let result;
        const secondValue = parseFloat(currentInput);
        switch (operator) {
          case "+":
            result = firstValue + secondValue;
            break;
          case "-":
            result = firstValue - secondValue;
            break;
          case "*":
            result = firstValue * secondValue;
            break;
          case "/":
            result = firstValue / secondValue;
            break;
        }
        display.textContent = result;
        currentInput = "";
        operator = "";
        firstValue = null;
      }
    } else {
      if (currentInput !== "") {
        firstValue = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      }
    }
  });
});
