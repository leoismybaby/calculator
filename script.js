// Variables
let firstNumber
let secondNumber
let operator
let displayValue = ''
let digitArray = document.querySelectorAll(".digit");

//Create function to 


//Create function to show digits on display when clicked
for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', function (e) {
        let display = document.querySelector(".display")
        displayValue = displayValue + String(digitArray[i].textContent)
        display.textContent = displayValue
        console.log(displayValue)
    })
}


function operate (firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return(add(firstNumber, secondNumber))
    }

    else if (operator == "-") {
        return subtract(firstNumber, secondNumber)
    }
    else if (operator == "*") {
        return multiply(firstNumber, secondNumber)
    }

    else if (operator == "/") {
        return divide(firstNumber, secondNumber)
    }
}

// Function to clear display
 // clear display
 //reset all variables to 0 or baseline

// Functions for basic math operators
function add(n1, n2) {
    return n1 + n2}

function subtract(n1, n2) {
    return n1 - n2}

function multiply (n1, n2) {
    return n1 * n2}

function divide (n1, n2) {
    return n1 / n2}

