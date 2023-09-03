let calc = new Calculator();

function inputDigit(digit) {
   calc.inputDigit(digit);
   updateDisplay();
}

function inputOperation(operation) {
   calc.inputOperation(operation);
   updateDisplay();
}

function updateDisplay() {
   document.querySelector('.screen').innerHTML = calc.displayText1();
}

function inputRadix() {
   calc.inputRadix();
   updateDisplay();
}

function plusMinus() {
   calc.plusMinus();
   updateDisplay();
}

function equal() {
   calc.equal();
   updateDisplay();
}

function reset() {
   calc.reset();
   updateDisplay();
}

function percent() {
   calc.percent();
   console.log('percent')
   updateDisplay();
}
