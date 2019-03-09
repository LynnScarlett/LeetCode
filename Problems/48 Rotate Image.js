/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  
  for (let i = 0; i < len / 2; i++) {
    let j = len - i - 1;
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

// related to a DISCUSSION Solution
