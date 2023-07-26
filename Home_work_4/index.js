x/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  return str.trim().toUpperCase()
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  return array.sort(function (a, b) {
    return b - a;
  })[0];
};

/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  let newArray = str.split(", ");
  let wordsLengthArray = [];
  for (let i = 0; i < newArray.length; i++) {
    wordsLengthArray.push(newArray[i].length);
  }
  return wordsLengthArray;
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  let resultArray = [];
  for (let i = 0; i < numArray.length; i++) {
    resultArray.push(Math.pow(numArray[i], degree));
  }
  return resultArray;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  let modifiedSentencesArray = [];
  let textArray = text.split(". ");
  let firstUpperLetter;
  let sentenceWithoutFirstLetter;
  let newSentence;
  for (i = 0; i < textArray.length; i++) {
    firstUpperLetter = textArray[i].substring(0, 1).toUpperCase();
    sentenceWithoutFirstLetter = textArray[i].slice(1);
    modifiedSentencesArray.push(newSentence = firstUpperLetter + sentenceWithoutFirstLetter);
  };
  return modifiedSentencesArray;
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  let positiveIntegersArray = [];
 for (let i = 0; i < array.length; i++) {
   if(typeof array[i] === 'number' && array[i] > 0) {
   positiveIntegersArray.push(array[i]);
 }; 
 };
  return positiveIntegersArray;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  for(i = 0; i < array.length; i++) {
    if(value === array[i]) {
    return i;
  }
  }
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  for(i = 0; i < array.length; i++) {
    if(value === array[i]) {
    return array[i];
  }
  }
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  // write your code here
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  // write your code here
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  // write your code here
};


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
