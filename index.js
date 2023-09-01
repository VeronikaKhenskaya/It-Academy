class Calculator {
    constructor() {
      this.input = 0;//запоминает ввод нового числа//
      this.currentOperation = null;
      this.lastOperation = null;
      this.result = 0; //текущий результат предыдущих операций//
    }
    
    inputDigit(digit) {
      if (this.currentOperation === null) {
        this.input = this.input * 10 + digit;
      } else {
        this.lastOperation = this.currentOperation;
        this.currentOperation = null;   
        this.input = digit;
      }
      
    }
    
    inputOperation(operation) {
      if(this.currentOperation === null) {
        if(this.lastOperation !== null) {
          this.performLastOperation();
        } else {
          this.result = this.input;
        }
        this.currentOperation = operation;
      } else {
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
  }