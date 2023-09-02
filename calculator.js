class Calculator {
    constructor() {
      this.input = '0'; //запоминает ввод нового числа//
      this.currentOperation = null;
      this.lastOperation = null;
      this.result = 0; //текущий результат предыдущих операций//
      this.displayText = '0'; //хранит значение, которое отображается на экране калькулятора
      this.hasRadix = false;
    }
    
    inputDigit(digit) {
      if (this.currentOperation === null) {
        if(this.input != '0'){
          this.input =  this.input + digit;
        } else {
          this.input = (this.input + digit).substring(1);
        }
      } else {
        this.result = Number(this.input); // иначе не правильно считается присвоение минуса или его отмена после выбора операции
        this.lastOperation = this.currentOperation;
        this.hasRadix = false;
        this.currentOperation = null;   
        this.input = String(digit);
      }
        this.displayText = this.input;
    }
    
    inputOperation(operation) {
      if(this.currentOperation === null) { // первый ввод текущей операции после числа
        if(this.lastOperation !== null) {
          this.performLastOperation();
          this.displayText = this.result;
        } else {
          // this.result = Number(this.input);
          this.displayText = this.input;
        }
        this.currentOperation = operation;
      } else {   // повторный ввод текущей выбранной операции
        this.currentOperation = operation; 
      }
    }
    
    performLastOperation() {
      if(this.lastOperation === '+') {
        this.result = this.result + Number(this.input);
      } else if(this.lastOperation === '-'){
         this.result = this.result - Number(this.input);
      } else if(this.lastOperation === '/'){
         this.result = this.result / Number(this.input);
      } else if(this.lastOperation === '*'){
         this.result = this.result * Number(this.input);
      } 
    }

    inputRadix() {
      if(this.hasRadix === false) {
        this.input = this.input + ".";
        this.displayText = this.input;
        this.hasRadix = true;
      }
    }

    plusMinus() {
      this.input = String(Number(this.input) * -1);
      this.displayText = this.input;
    }

    result() {

    }
  }

