const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let line = [];
  let block = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      let count = 0;

      let left = (j === 0) ? false : row[j - 1];
      let up = (i === 0) ? false : matrix[i - 1][j];
      let upLeft = (j === 0 || i === 0) ? false : matrix[i - 1][j - 1];
      let upRight = (j === row.length - 1 || i === 0) ? false : matrix[i - 1][j + 1];
      let right = (j === row.length - 1) ? false : row[j + 1];
      let down = (i === matrix.length - 1) ? false : matrix[i + 1][j];
      let downLeft = (j === 0 || i === matrix.length - 1) ? false : matrix[i + 1][j - 1];
      let downRight = (j === row.length - 1 || i === matrix.length - 1) ? false : matrix[i + 1][j + 1];

      if (left) {
        count++;
      }
      if (up) {
        count++;
      }
      if (upLeft) {
        count++;
      }
      if (upRight) {
        count++;
      }
      if (right) {
        count++;
      }
      if (down) {
        count++;
      }
      if (downLeft) {
        count++;
      }
      if (downRight) {
        count++;
      }

      line.push(count);
    }

    block.push([...line]);
    line.length = 0;
  }

  return block;
}

module.exports = {
  minesweeper,
};
