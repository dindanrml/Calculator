let display = document.getElementById('display')
let currentInput = '0';
let operator = null;
let previousInput = '';

function updatedisplay() {
    display.innerText = currentInput;
}

function deleteAll() {
    currentInput = '0';
    operator = null;
    previousInput = '';
    updatedisplay();
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1) || '0';
    updatedisplay();
}

function appendkalk(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updatedisplay();
}

function appendoperator(op) {
    if (operator !== null) result();
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function kalkresult() {
    if (operator === null) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '÷':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updatedisplay();
}