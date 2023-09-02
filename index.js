let calc = new Calculator();

 function inputDigit(digit){
    calc.inputDigit(digit);
    updateDisplay();
 }

 function inputOperation(operation){
    calc.inputOperation(operation);
    updateDisplay();
 }

 function updateDisplay(){
    document.querySelector('.screen').innerHTML = calc.displayText;
 }
