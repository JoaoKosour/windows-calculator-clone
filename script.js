var computingSecondNumber = false;
var firstNumber = [];
var secondNumber = [];
var saveOperation = '';
var display = document.getElementById('display')
var remmember = document.getElementById('display-firstNumber')
var resultAlreadyComputed = false;
var remmemberDisplayNumber;


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
    var num_1 = parseFloat(firstNumber.join('')),
        num_2, temp;
    if (computingSecondNumber)
        num_2 = parseFloat(secondNumber.join(''))
    else
        num_2 = 0;
    switch (operation) {
        case '+':
            saveOperation = '+'
            temp = num_1 + num_2;
            firstNumber = ('' + temp).split('')
            break;
        case '-':
            saveOperation = '-'
            temp = num_1 - num_2;
            firstNumber = ('' + temp).split('')
            break;
        case '*':
            saveOperation = '*'
            temp = num_1 * num_2;
            firstNumber = ('' + temp).split('')
            break;
        case '/':
            saveOperation = '/'
            temp = num_1 / num_2;
            firstNumber = ('' + temp).split('')
            break;
    }
    computingSecondNumber = true;
    renderDisplay()
}

function renderDisplay() {
    if (firstNumber.length > 9)
        display.style.fontSize = '25px'
    else
        display.style.fontSize = '50px'

    if (resultAlreadyComputed) {
        remmember.innerHTML = remmemberDisplayNumber + ' ' + saveOperation + ' ' + secondNumber.join('') + ' ='
        display.innerHTML = firstNumber.join('');
        return;
    }

    if (computingSecondNumber) {
        remmember.innerHTML = firstNumber.join('') + ' ' + saveOperation
        if (secondNumber.length > 0)
            display.innerHTML = secondNumber.join('')
        else
            display.innerHTML = firstNumber.join('');
        return;
    }

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
    remmember.innerHTML = ''
    result = 0;
    resultAlreadyComputed = false;
}

function equal() {
    if (!secondNumber.length) return;
    computingSecondNumber = false;
    remmemberDisplayNumber = parseFloat(firstNumber.join(''))
    var num_2 = parseFloat(secondNumber.join(''))
    var temp = 0;
    switch (saveOperation) {
        case '+':
            temp = remmemberDisplayNumber + num_2;
            break;
        case '-':
            temp = remmemberDisplayNumber - num_2;
            break;
        case '*':
            temp = remmemberDisplayNumber * num_2;
            break;
        case '/':
            temp = remmemberDisplayNumber / num_2;
            break;
    }
    firstNumber = ('' + temp).split('')
    resultAlreadyComputed = true;
    renderDisplay()
}