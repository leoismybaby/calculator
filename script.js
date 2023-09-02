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
         // store display value as firstNumber
        firstNumber = displayValue
        console.log(`firstNumber: ${firstNumber}`)
        // clear displayvalue
        displayValue = ''
    })
}

//function for = operator
let compute = document.getElementById('=')
// when = clicked
compute.addEventListener('click', function (e){
    // store displayvalue as secondNumber
    secondNumber = parseInt(displayValue)
    firstNumber = parseInt(firstNumber)
    result = operate(firstNumber, secondNumber, operator)
    console.log(result)
    // update displayvalue to be result of expr, show displayValue on screen 
    display.textContent = result
    firstNumber = result
})


// Function to clear display
let clearDisplay = document.querySelector('#clear')
clearDisplay.addEventListener('click', function (e) {
    displayValue = ''
    display.textContent = displayValue
})

//function to show digits on display when clicked
for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', function (e) {
        displayValue = displayValue + String(digitArray[i].textContent)
        display.textContent = displayValue
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

