// Variables
let firstNumber
let secondNumber
let operator
let displayValue = ''
let digitArray = document.querySelectorAll(".digit");
let display = document.querySelector(".display")

// Function to clear display
let clearDisplay = document.querySelector('#clear')
clearDisplay.addEventListener('click', function (e) {
    displayValue = ''
    display.textContent = displayValue
})

//Create function to show digits on display when clicked
for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', function (e) {
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

// Functions for basic math operators
function add(n1, n2) {
    return n1 + n2}

function subtract(n1, n2) {
    return n1 - n2}

function multiply (n1, n2) {
    return n1 * n2}

function divide (n1, n2) {
    return n1 / n2}

