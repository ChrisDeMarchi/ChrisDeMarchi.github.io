window.onload = function () {
    document.getElementById("button7").onclick = function() { appendNum(7); };
    document.getElementById("button8").onclick = function() { appendNum(8); };
    document.getElementById("button9").onclick = function() { appendNum(9); };
    document.getElementById("buttonClear").onclick = clearDisplay;
    document.getElementById("button4").onclick = function() { appendNum(4); };
    document.getElementById("button5").onclick = function() { appendNum(5); };
    document.getElementById("button6").onclick = function() { appendNum(6); };
    document.getElementById("buttonAdd").onclick = function() { operate('+'); };
    document.getElementById("button1").onclick = function() { appendNum(1); };
    document.getElementById("button2").onclick = function() { appendNum(2); };
    document.getElementById("button3").onclick = function() { appendNum(3); };
    document.getElementById("buttonSubtract").onclick = function() { operate('-'); };
    document.getElementById("button0").onclick = function() { appendNum(0); };
    document.getElementById("buttonDecimal").onclick = appendDecimal;
    document.getElementById("buttonCalculate").onclick = calculate;
    document.getElementById("buttonMultiply").onclick = function() { operate('*'); };
    document.getElementById("buttonDivide").onclick = function() { operate('/'); };
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
