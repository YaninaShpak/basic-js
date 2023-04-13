const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let indexsArr = [];
  
  let res = matrix.reduce((acc, cur, index) => {
    let sumCur = 0;
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] === 0) {
        indexsArr.push(i)
      }
      if (index === 0) {
        sumCur += cur[i]
      } else {
        if (!indexsArr.includes(i)) {
          sumCur += cur[i]
        }
      }
    }

    return acc + sumCur
  }, 0);

  return res;
}

module.exports = {
  getMatrixElementsSum
};
