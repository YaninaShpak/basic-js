const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArr = n.toString().split('');
  let max = 0;

  for (let i = 0; i < numArr.length; i++) {
    let copyNumArr = [...numArr];
    copyNumArr.splice(i, 1);
    max = Math.max(max, Number(copyNumArr.join('')))
  }
  
  return max;
}

module.exports = {
  deleteDigit
};
