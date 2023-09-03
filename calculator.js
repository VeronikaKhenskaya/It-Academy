class Calculator {
  constructor() {
    this.input = '0'; //запоминает ввод нового числа//
    this.currentOperation = null;
    this.lastOperation = null;
    this.result = 0; //текущий результат предыдущих операций//
    this.hasRadix = false;
  }

  inputDigit(digit) {
    if (this.currentOperation === null) {
      if (this.input != '0') {
        this.input = this.input + digit;
      } else {
        this.input = (this.input + digit).substring(1);
      }
    } else {
      if (this.lastOperation === null) {
        this.result = Number(this.input); // иначе неправильно считается присвоение минуса или его отмена после выбора операции
      }
      this.lastOperation = this.currentOperation;
      this.hasRadix = false;
      this.currentOperation = null;
      this.input = String(digit);
    }
  }

  inputOperation(operation) {
    if (this.currentOperation === null) { // первый ввод текущей операции после числа
      if (this.lastOperation !== null) {
        this.performLastOperation();
        this.input = null;
      }
      this.currentOperation = operation;
    } else {   // повторный ввод текущей выбранной операции
      this.currentOperation = operation;
    }
  }

  performLastOperation() {
    if (this.lastOperation === '+') {
      this.result = this.result + Number(this.input);
    } else if (this.lastOperation === '-') {
      this.result = this.result - Number(this.input);
    } else if (this.lastOperation === '/') {
      this.result = this.result / Number(this.input);
    } else if (this.lastOperation === '*') {
      this.result = this.result * Number(this.input);
    }
  }

  inputRadix() {
    if (this.hasRadix === false) {
      this.input = this.input + ".";
      this.hasRadix = true;
    }
  }

  plusMinus() {
    if (this.input != null) {
      this.input = String(Number(this.input) * -1);
    } else {
      this.input = this.result * -1;
    }
  }

  displayText1() {
    if (this.input === null) {
      return String(this.result);
    } else {
      return this.input;
    }
  }

  equal() {
    this.performLastOperation();
    this.input = null;
    this.currentOperation = null;
    this.lastOperation = null;
    this.hasRadix = false;
  }

  reset() {
    this.input = '0';
    this.currentOperation = null;
    this.lastOperation = null;
    this.result = 0;
    this.hasRadix = false;
  }

  percent() {
    if (this.lastOperation === '*') {
      this.performLastOperation();
      this.result = this.result / 100;
      this.input = null;
    }
  }
}

