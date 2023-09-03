// Variables
let firstNumber
let secondNumber
let operator
let displayValue = ''
let digitArray = document.querySelectorAll(".digit");
let operatorsArray = document.querySelectorAll('.operator')
let display = document.querySelector(".display")

//function for operators
// when operator clicked, 
for (let i = 0; i < operatorsArray.length; i++) {
    operatorsArray[i].addEventListener('click', function (e){
         // store display value as firstNumber IF firstNumber = undefined
        if (firstNumber == undefined) {
         firstNumber = displayValue}
        else {
            secondNumber = displayValue
            console.log(`secondNumber: ${secondNumber}`)
            firstNumber = operate(firstNumber, secondNumber, operator)
            display.textContent = firstNumber
            console.log(`firstNumber: ${firstNumber}`)
        }
        // store operator in variable
        if (operatorsArray[i].textContent == '÷') {
            operator = "/" }
        else if (operatorsArray[i].textContent == '−') { 
            operator = "-"}
        else if (operatorsArray[i].textContent == 'x') {
            operator = "*"
        }
        else {operator = operatorsArray[i].textContent}
        // clear displayvalue
        displayValue = ''
    })
}

//function for equal operator
let compute = document.getElementById('equal')
// when = clicked
compute.addEventListener('click', function (e){
    if (firstNumber != undefined) {
        secondNumber = displayValue
        firstNumber = operate(firstNumber, secondNumber, operator)
        console.log(firstNumber)
        console.log(secondNumber)
        display.textContent = firstNumber
        displayValue = firstNumber
        console.log(displayValue)
        firstNumber = undefined
    }
})

//function to show digits on display when clicked
for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', function (e) {
        displayValue = displayValue + String(digitArray[i].textContent)
        display.textContent = displayValue
    })
}

// Function to clear display
let clearDisplay = document.querySelector('#clear')
clearDisplay.addEventListener('click', function (e) {
    displayValue = ''
    firstNumber = undefined
    secondNumber = undefined
    display.textContent = displayValue
})

function operate (firstNumber, secondNumber, operator) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
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
    n1 = Math.round(n1)
    n2 = Math.round(n2)
    return n1 + n2}

function subtract(n1, n2) {
    return n1 - n2}

function multiply (n1, n2) {
    return n1 * n2}

function divide (n1, n2) {
    if (n2 == 0) {
    return 'Stop! Do not do that again >:('}
    else return n1 / n2
    }
