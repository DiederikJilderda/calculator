//// NOTES //// 


// [ ]  fix bug when overriding operators 
// [ ]  add decimal option 
// [ ]  add keyboard support 




//// FUNCTIONS //// 


// Display operator symbol 
function operator(buttonVal) {
    operatorVal = buttonVal;
    operatorDisplay.textContent = operatorVal; 
}


// Clear display in steps: input value, then operator, then stored value 
function clear() {
    if (inputVal.length > 0) {
        inputVal.pop();
        inputDisplay.textContent = Number(inputVal.join(""));
    }
    else if (inputVal.length == 0 && operatorVal != null) {
        inputVal = [];
        inputDisplay.textContent = null;
        operatorVal = null;
        operatorDisplay.textContent = operatorVal;        
    }
    else {
        storedVal = null;
        storedDisplay.textContent = storedVal;
    }
}


// Calculate stored value and input value with operator 
function calculate() {
    storedVal = Number(storedVal);
    inputVal = Number(inputVal.join(""));


    if (operatorVal == "+") {
        storedVal += inputVal; 
    }


    if (operatorVal == "-") {
        storedVal -= inputVal; 
    }


    if (operatorVal == "x") {
        storedVal *= inputVal; 
    }


    if (operatorVal == ":") {
        if (inputVal == 0 || inputVal == null) {
            alert("Please don't divide by zero");
        }
        else {
            storedVal /= inputVal;
        } 
    }


    operatorVal = null;
    inputVal = [];
    storedDisplay.textContent = storedVal;
    operatorDisplay.textContent = operatorVal;
    inputDisplay.textContent = inputVal;
}


// Press button function 
function pressed(button){
    const buttonVal = button.textContent; 


    if (buttonVal == "C") {
        clear();
    }


    else {
        if (isNaN(buttonVal)) {
            if (storedVal == null && inputVal != []) {
                storedVal = Number(inputVal.join(""));
                storedDisplay.textContent = storedVal;
                inputVal = [];
                inputDisplay.textContent = inputVal;
            }
            else if (storedVal != null && inputVal != []) {
                calculate();
            }


            if (buttonVal == "=") {
                calculate();
            }
            else {
                operator(buttonVal);
            }
        }


        else {
            if (operatorVal == null) {
                storedVal = null;
                storedDisplay.textContent = storedVal;
            }
            inputVal.push(Number(buttonVal)); 
            inputDisplay.textContent = Number(inputVal.join(""));
        }
    }
}




//// INITIALISATION ////


// Initialise calculator values 
let storedVal = null;
let operatorVal = null;
let inputVal = [];




//// EVENT LISTENERS //// 


// Document element identifiers  
const inputDisplay = document.querySelector(".inputDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const storedDisplay = document.querySelector(".storedDisplay");
const buttons = document.querySelectorAll(".button");




// Button press animation 
for (let button of buttons) {
    button.classList.add("unpressed");
    button.addEventListener("mousedown", () => button.classList.remove("unpressed"));
    button.addEventListener("mouseup", () => button.classList.add("unpressed"));
    button.addEventListener("mouseleave", () => button.classList.add("unpressed"));
}




// Eventlisteners for button click 
for (let button of buttons) {
    button.addEventListener("mouseup", () => pressed(button));
}


// Eventlisteners for keyboard press 
