'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function(acc, element){
      return acc + element;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(element){
      return (element.hasOwnProperty(prop));
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function(element, index, newArr){
      return {
        first: element[0],
        last: element[1]
      };
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(element){
      return element.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    return arr.filter(function(element){
      return element.includes(str);
    });
  },
};
