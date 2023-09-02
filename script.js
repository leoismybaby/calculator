// Variables
let firstNumber
let secondNumber
let operator
let displayValue 
let digitArray = document.querySelectorAll(".digit");

//Next steps:
//1. Store expression in variable "display"
//2. When "=" is pressed, create function to
//   evaluate expression:
//      while expr.includes / => search("&divide") 
//          use operate and assign value to varibale
//          make value into string and replace what 
//          was calculated using indexes
//   return display.textcontent = displayValue
//3. 

//Create function to show numbers on display when clicked
for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', function (e) {
        let display = document.querySelector(".display")
        display.textContent = String(digitArray[i].textContent)
        console.log(display.textContent)
        
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

