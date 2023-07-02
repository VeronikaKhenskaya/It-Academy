/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {
  return a + b;
}

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return true if number is even or false is number is not even
const isNumberEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  };
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
// If num1 is greater than num2 return string 'num1 is the largest number'
// if num2 is greater than num1 return string 'num2 is the largest number'
// if num1 is equal to num2 return string 'num1 is equal to num2'
const findLargestNumber = (num1, num2) => {
  if (num1 == num2) {
    return num1 + " " + "is equal to " + num2;
  } else {
    if (num1 > num2) {
      return num1 + " " + "is the largest number";
    } else {
      return num2 + " " + "is the largest number";
    }
  }
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
// if triangle is equilateral return string 'Equilateral triangle'
// if triangle is Scalene return string 'Scalene triangle'
// if triangle is Isosceles return string 'Isosceles triangle'
const findTriangleType = (side1, side2, side3) => {
  if (side1 == side2 && side2 == side3 && side3 == side1) {
    return "Equilateral triangle";
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  };
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// function should return amount of days in month with string 'The Month has X days'
// If wrong month number provided return string 'Invalid Month of value X'
const findDaysInMonth = (month, year) => {
  if (month > 12) {
    return "Invalid Month of value " + month;
  }
  return "The Month has " + new Date(year, month, 0).getDate() + " " + "days";
}

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
// function should return result of operation of num1 and num2 based on operation parameter.
// If operation is invalid return string 'Invalid operation'
const calculateResult = (num1, num2, operation) => {
  if (operation == "add") {
    return num1 + num2;
  }
  if (operation == "subtract") {
    return num1 - num2;
  }
  if (operation == "multiply") {
    return num1 * num2;
  }
  if (operation == "divide") {
    return num1 / num2;
  }
  if (operation == "modulus") {
    return num1 % num2;
  }
  return "someunknownoperation is an invalid operation";
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
// Compare your result with string in test
const getMultiplicationTable = () => {
  let str1 = "";
  for (let i = 2; i < 10; i++) {
    str1 += "==== " + i + " ==== \n";
    for (let j = 1; j <= 10; j++) {
      str1 += i + " * " + j + " = " + (i * j) + " \n";
    }
  }
  return str1;
}

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
