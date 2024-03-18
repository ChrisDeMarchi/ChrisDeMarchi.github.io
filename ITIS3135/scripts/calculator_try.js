window.onload = function () {
    document.getElementById("button7").addEventListener("click", function() { appendNum(7); });
    document.getElementById("button8").addEventListener("click", function() { appendNum(8); });
    document.getElementById("button9").addEventListener("click", function() { appendNum(9); });
    document.getElementById("buttonClear").addEventListener("click", clearDisplay);
    document.getElementById("button4").addEventListener("click", function() { appendNum(4); });
    document.getElementById("button5").addEventListener("click", function() { appendNum(5); });
    document.getElementById("button6").addEventListener("click", function() { appendNum(6); });
    document.getElementById("buttonAdd").addEventListener("click", function() { operate('+'); });
    document.getElementById("button1").addEventListener("click", function() { appendNum(1); });
    document.getElementById("button2").addEventListener("click", function() { appendNum(2); });
    document.getElementById("button3").addEventListener("click", function() { appendNum(3); });
    document.getElementById("buttonSubtract").addEventListener("click", function() { operate('-'); });
    document.getElementById("button0").addEventListener("click", function() { appendNum(0); });
    document.getElementById("buttonDecimal").addEventListener("click", appendDecimal);
    document.getElementById("buttonCalculate").addEventListener("click", calculate);
    document.getElementById("buttonMultiply").addEventListener("click", function() { operate('*'); });
    document.getElementById("buttonDivide").addEventListener("click", function() { operate('/'); });
};


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
