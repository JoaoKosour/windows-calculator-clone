var computingSecondNumber = false;
var firstNumber = [];
var secondNumber = [];
var saveOperation = '';
var display = document.getElementById('display')
var remmember = document.getElementById('display-firstNumber')
var resultAlreadyComputed = false;
var firstRemmember = 0;
var secondRemmember = 0;
var displayNumber = 0;

function registerNumber(number) {
    if (firstNumber.length > 9 || secondNumber.length > 9)
        display.style.fontSize = '25px'
    else
        display.style.fontSize = '50px'
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
    if (computingSecondNumber && secondNumber.length)
        num_2 = parseFloat(secondNumber.join(''))
    else
        num_2 = 0;

    switch (operation) {
        case '+':
            saveOperation = '+'

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
    if (computingSecondNumber) {
        equal()
        return;
    }
    computingSecondNumber = true;
}

function renderDisplay() {
    if (resultAlreadyComputed) {
        remmember.innerHTML = firstRemmember + ' ' + saveOperation + ' ' + secondRemmember + ' ='
        display.innerHTML = displayNumber;
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
    firstRemmember = 0;
    secondRemmember = 0;
    displayNumber = 0;
}

function equal() {
    firstRemmember = parseFloat(firstNumber.join(''));
    if (secondNumber.length)
        secondRemmember = parseFloat(secondNumber.join(''));

    switch (saveOperation) {
        case '+':
            displayNumber = firstRemmember + secondRemmember;
            break;
        case '-':
            displayNumber = firstRemmember - secondRemmember;
            break;
        case '*':
            displayNumber = firstRemmember * secondRemmember;
            break;
        case '/':
            displayNumber = firstRemmember / secondRemmember;
            break;
    }

    firstNumber = ('' + displayNumber).split('')
    secondNumber = []
    resultAlreadyComputed = true;
    console.log(displayNumber)
    renderDisplay()
}