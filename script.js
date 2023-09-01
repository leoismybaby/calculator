// Variables
let firstNumber
let secondNumber
let operator
let displayValue 
let display = ''
let buttonsArray = document.querySelectorAll("button");

//Create function to show numbers on display when clicked
for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('click', function (e) {
        let selectDisplay = document.querySelector(".display")
        let buttonClicked = String(buttonsArray[i].textContent)
        selectDisplay.textContent = display + " "  + buttonClicked
        display = selectDisplay.textContent
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

