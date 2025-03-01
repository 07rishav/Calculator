
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function updateDisplay(value) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}

function clearDisplay() {
  display.textContent = "0";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      clearDisplay(); // Clear screen
    } else if (buttonText === "=") {
      calculateResult(); // Perform calculation
    } else if (["+", "-", "*", "/"].includes(buttonText)) {
      const lastChar = display.textContent.slice(-1);
      if (!["+", "-", "*", "/"].includes(lastChar)) {
        updateDisplay(buttonText);
      }
    } else {
      updateDisplay(buttonText);
    }

    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/".includes(key)) {
    updateDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
