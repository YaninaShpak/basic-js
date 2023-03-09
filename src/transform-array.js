const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let newArr = [...arr];

  newArr.forEach((el, i) => {
    
    if (el === '--discard-next') {
      newArr.splice(i + 1, 1);
    }

    if (el === '--discard-prev') {
      if (i === 0) {
        newArr.splice(i, 1)
      } else {
        newArr.splice(i - 1, 1)
      }
    }

    if (el === '--double-next') {
      if (i === newArr.length - 1) {
        newArr.splice(i, 1)
      } else {
        newArr[i] = newArr[i + 1];
      }
    }

    if (el === '--double-prev') {
      if (i === 0) {
        newArr.splice(i, 1)
      } else {
        newArr[i] = newArr[i - 1];
      }
    }
  });

  return newArr.filter(el => el != '--discard-next' && el != '--discard-prev' && el != '--double-next' && el != '--double-prev');
}

module.exports = {
  transform
};