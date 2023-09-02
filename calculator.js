class Calculator {
    constructor() {
      this.input = 0; //запоминает ввод нового числа//
      this.currentOperation = null;
      this.lastOperation = null;
      this.result = 0; //текущий результат предыдущих операций//
      this.displayText = '0';
      this.hasRadix = false;
    }
    
    inputDigit(digit) {
      if (this.currentOperation === null) {
        this.input = parseInt('' + this.input + digit);
      } else {
        this.lastOperation = this.currentOperation;
        this.currentOperation = null;   
        this.input = digit;
      }
        this.displayText = this.input;
    }
    
    inputOperation(operation) {
      if(this.currentOperation === null) { //первый ввод текущей операции после числа
        if(this.lastOperation !== null) {
          this.performLastOperation();
          this.displayText = this.result;
        } else {
          this.result = this.input;
          this.displayText = this.input;
        }
        this.currentOperation = operation;
      } else {// повторный ввод текущей выбранной операции
        this.currentOperation = operation; 
      }
    }
    
    performLastOperation() {
      if(this.lastOperation === '+') {
        this.result = this.result + this.input;
      } else if(this.lastOperation === '-'){
         this.result = this.result - this.input;
      } else if(this.lastOperation === '/'){
         this.result = this.result / this.input;
      } else if(this.lastOperation === '*'){
         this.result = this.result * this.input;
      } 
    }

    inputRadix() {
      if(this.hasRadix === false) {

      }
    }
    
  }

