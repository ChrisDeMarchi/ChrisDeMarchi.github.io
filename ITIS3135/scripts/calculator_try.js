let displayValue = '0';
let operator = null;
let firstOperand = null;
let awaitingSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = null;
    firstOperand = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

function appendNum(num) {
    if (displayValue === '0' || awaitingSecondOperand) {
        displayValue = num.toString();
        awaitingSecondOperand = false;
    } else {
        displayValue += num.toString();
    }
    updateDisplay();
}

function appendDecimal() {
    if (awaitingSecondOperand) return;
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function operate(op) {
    if (operator !== null && !awaitingSecondOperand) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    awaitingSecondOperand = true;
}

function calculate() {
    if (operator === null || awaitingSecondOperand) return;
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    operator = null;
    firstOperand = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

updateDisplay();
