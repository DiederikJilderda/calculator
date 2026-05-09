//// BUGS //// 
// 0.8 - 0.7 = 0.10000000000000009 ??? 
// 0.8 - 0.1 = 0.70000000000000001 ??? 
// 0.8 / 0.1 = 8 
// 0.8 * 0.1 = 0.08000000000000002 ??? 
// 0.7 - 0.1 = 0.6 
// 0.2 ^ 3   = 0.008000000000000002 ??? 

//// FUNCTIONS //// 

// Display operator symbol 
function operator(buttonVal) {
    operatorVal = buttonVal;
    operatorDisplay.textContent = operatorVal; 
}

// Clear display in steps: input values, then operator, then full stored value 
function clear() {
    if (inputVal.length > 0) {
        inputVal.pop();
        inputDisplay.textContent = inputVal.join("");
    }
    else if (inputVal.length === 0 && operatorVal != null) {
        inputVal = [];
        operatorVal = null;
        operatorDisplay.textContent = operatorVal;        
    }
    else {
        storedVal = null;
        storedDisplay.textContent = storedVal;
    }
}

// Clear full display  
function allClear() {
    inputVal = [];
    operatorVal = null;
    storedVal = null;

    inputDisplay.textContent = inputVal.join("");
    operatorDisplay.textContent = operatorVal;        
    storedDisplay.textContent = storedVal;
}

// Calculate stored value and input value with operator 
function calculate() {
    // Convert inputs to numbers 
    storedVal = Number(storedVal);
    inputVal = Number(inputVal.join(""));

    // Calculations return the new stored value 
    if (operatorVal === "+") {
        storedVal += inputVal;}
    if (operatorVal === "-") {
        storedVal -= inputVal; }
    if (operatorVal === "x") {
        storedVal *= inputVal; }
    if (operatorVal === "^") {
        storedVal = storedVal ** inputVal; }
    if (operatorVal === "/") {
        if (inputVal === 0 || inputVal === null) {
            alert("Please don't divide by zero");
        }
        else {
            storedVal /= inputVal;
        }}

    // Clear display except stored value 
    operatorVal = null;
    inputVal = [];
    storedDisplay.textContent = storedVal;
    operatorDisplay.textContent = operatorVal;
    inputDisplay.textContent = inputVal;
}

// Press button function 
function pressed(button){
    const buttonVal = button.textContent; 

    // If special button:   
    if (buttonVal === "d") {
        clear();}
    else if (buttonVal === "c") {
        allClear();}
    else if (buttonVal === "=") {
        calculate();}
    // If other button: 
    else {
        // If button is operator either: 
        if (isNaN(buttonVal) && buttonVal != ".") {
            // Calculate result if both input and stored values are present 
            if (inputVal.length != 0 && storedVal != null) {
                calculate();
            }
            // Push input to stored value if stored is empty 
            else if (inputVal.length != 0 && storedVal === null) {
                storedVal = Number(inputVal.join(""));
                inputVal = [];
                storedDisplay.textContent = storedVal;
                inputDisplay.textContent = inputVal; 
            }
            operator(buttonVal);
        }

        // If button is number or .
        else {
            // Clear stored value if no operator is present 
            if (storedVal != null && operatorVal === null) {
                storedVal = null; 
                storedDisplay.textContent = storedVal;
            }

            // Append input to display 
            if (buttonVal === "." && inputVal.includes(".")) {
                    return
                }
            else {
                inputVal.push(buttonVal); 
                inputDisplay.textContent = inputVal.join("");
            }
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
const buttons = document.querySelectorAll(".button", ".longButton");


// Button event listeners  
for (let button of buttons) {
    // Mouse events 
    button.classList.add("unpressed");
    button.addEventListener("mousedown", () => button.classList.remove("unpressed"));
    button.addEventListener("mouseleave", () => button.classList.add("unpressed"));
    button.addEventListener("mouseup", () => button.classList.add("unpressed"));
    button.addEventListener("mouseup", () => pressed(button));

    // Keyboard events 
    document.addEventListener("keydown", (event) => {
        if (event.key === button.textContent) {
            button.classList.remove("unpressed");
        }
    })
    document.addEventListener("keyup", (event) => {
        if (event.key === button.textContent) {
            button.classList.add("unpressed");
            pressed(button);
        }
    })
}