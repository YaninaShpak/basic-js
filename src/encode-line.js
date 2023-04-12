const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let newArr = str.split('').reduce((acc, cur, i, arr) => {
    if (cur === arr[i - 1]) {
      acc[count - 1][0] += 1;
      
    } else {
      acc.push([1, cur]);
      count += 1;
    }
    
    return acc;
  }, [])

  let res = newArr.flat().map(el => el === 1 ? '' : el).join('');

  return res;
}


module.exports = {
  encodeLine
};
