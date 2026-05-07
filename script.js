function operator(buttonVal) {
    operatorVal = buttonVal;
    operatorDisplay.textContent = operatorVal; 
}

function clear() {
    storedVal = null; 
    operatorVal = null;
    inputVal = [];
    storedDisplay.textContent = storedVal;
    operatorDisplay.textContent = operatorVal;
    inputDisplay.textContent = inputVal;
}

function calculate(storedVal, operatorVal, inputVal) {
    storedVal = Number(storedVal);
    inputVal = Number(inputVal.join(""));

    if (operatorVal == "+") {
        storedVal += inputVal; 
    }

    operatorVal = null;
    inputVal = [];
    storedDisplay.textContent = storedVal;
    operatorDisplay.textContent = operatorVal;
    inputDisplay.textContent = inputVal;
}


// Initialise calculator
let storedVal = null;
let operatorVal = null;
let inputVal = [];

// Query selectors 
const inputDisplay = document.querySelector(".inputDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const storedDisplay = document.querySelector(".storedDisplay");
const buttons = document.querySelectorAll(".button");


// Press button animations 
for (let button of buttons) {
    button.classList.add("unpressed");
    button.addEventListener("mousedown", () => button.classList.remove("unpressed"));
    button.addEventListener("mouseup", () => button.classList.add("unpressed"));
    button.addEventListener("mouseleave", () => button.classList.add("unpressed"));
}


// Press functions 
function pressed(button){
    const buttonVal = button.textContent; 

    if (buttonVal == "C") {
        clear();
    }

    else {
        if (isNaN(buttonVal)) {
            if (storedVal == null) {
                storedVal = Number(inputVal.join(""));
                storedDisplay.textContent = storedVal;
                inputVal = [];
                inputDisplay.textContent = inputVal;
            }

            if (buttonVal == "=") {
                calculate(storedVal, operatorVal, inputVal);
            }
            else {
                operator(buttonVal);
            }
        }

        else {
            inputVal.push(Number(buttonVal)); 
            inputDisplay.textContent = Number(inputVal.join(""));
        }
    }
}

for (let button of buttons) {
    button.addEventListener("mouseup", () => pressed(button));
}