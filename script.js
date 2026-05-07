function addition(input) {
    operatorDisplay.textContent = input; 
    console.log(input);
}

function subtraction(input) {
    operatorDisplay.textContent = input; 
    console.log(input);
}

function multiplication(input) {
    operatorDisplay.textContent = input; 
    console.log(input);
}

function division(input) {
    operatorDisplay.textContent = input; 
    console.log(input);
}

function clear() {
    return 
}

function calculate() {
    return 
}


// Initialise calculator
// let displayVal = ""; 
let storedVal = "";
let operatorVal = "";
let inputVal = [];


const inputDisplay = document.querySelector(".inputDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
let storedDisplay = document.querySelector(".storedDisplay");

// inputDisplay.textContent = displayVal; 


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
    const input = button.textContent; 

    if (isNaN(input)) {
        if (storedVal == "") {
            storedVal = inputVal.join("");
            inputVal = [];
            inputDisplay.textContent = inputVal;
            storedDisplay.textContent = storedVal;
        }

        if (input == "+") {
            addition(input);
        }
        else if (input == "-") {
            subtraction(input);
        }
        else if (input == "x") {
            multiplication(input);
        }
        else if (input == ":") {
            division(input);
        }
        else if (input == "C") {
            clear();
        }
        else if (input == "=") {
            calculate(storedVal, inputVal);
        }
    }
    else {
        inputVal.push(input); 
        inputDisplay.textContent = inputVal.join("");
        console.log(input);
    }
}

for (let button of buttons) {
    button.addEventListener("mouseup", () => pressed(button));
}