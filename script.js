var computingSecondNumber = false;
var firstNumber = [];
var secondNumber = [];
var saveOperation = '';
var display = document.getElementById('display')


function registerNumber(number) {
    if (firstNumber.length > 18) return; //we use this 'if' to prevent the number from going over the display size. you can set the number higher if you make the fontsize smaller
    if (computingSecondNumber) {
        secondNumber.push(number)
        renderDisplay()
        return;
    }
    firstNumber.push(number);
    renderDisplay()
}

function operate(operation) {
    switch (operation) {
        case '+':
            secondNumber = true;
            saveOperation = '+'
    }
    renderDisplay()
}

function renderDisplay() {
    if (firstNumber.length > 10)
        display.style.fontSize = '30px'
    else
        display.style.fontSize = '50px'
    display.innerHTML = firstNumber.join('');
    console.log(firstNumber)
}

function deleteOneNumber() {
    if (computingSecondNumber) {
        secondNumber.pop()
        return;
    }
    firstNumber.pop()
    renderDisplay()
}

function resetCalculator() {
    computingSecondNumber = false;
    firstNumber = [];
    secondNumber = [];
    saveOperation = '';
    display.style.fontSize = '50px'
    display.innerHTML = '0'
}