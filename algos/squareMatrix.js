// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
    * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
    *    a square matrix (rows and columns).
    * @returns {number} Represents the absolute difference between the top left to
    *    bottom right diagonal and the top right to bottom left diagonal.
    * Math.abs()
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
function diagonalDifference(sqrMatrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (var i = 0; i < sqrMatrix.length; i++) {
    diagonal1 += sqrMatrix[i][i];
  }

  for (var i = sqrMatrix.length - 1; i >= 0; i--) {
    diagonal2 += sqrMatrix[sqrMatrix.length - 1 - i][i];
  }

  return Math.abs(diagonal1 - diagonal2);
}

console.log(diagonalDifference(squareMatrix2));
