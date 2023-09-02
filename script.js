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
            firstNumber = operate(parseInt(firstNumber), parseInt(secondNumber), operator)
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
        console.log(`operator: ${operator}`)
        
        // clear displayvalue
        displayValue = ''
    })
}

//function for = operator
let compute = document.getElementById('=')
// when = clicked
compute.addEventListener('click', function (e){
    // store displayvalue as secondNumber
    secondNumber = displayValue
    console.log(`secondnum: ${secondNumber}`)
    firstNumber = operate(parseInt(firstNumber), parseInt(secondNumber), operator)
    console.log(firstNumber)
    // update displayvalue to be result of expr, show displayValue on screen 
    display.textContent = firstNumber
    console.log(`displayval: ${displayValue}`)
    console.log(`firstNumber: ${firstNumber}`)
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

