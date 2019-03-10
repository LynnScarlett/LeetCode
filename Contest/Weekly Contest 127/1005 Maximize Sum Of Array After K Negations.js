/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => a - b)
  var i = 0
  for (; i < A.length; i++) {
    if (A[i] < 0 && K) {
      K--
      A[i] = -A[i]
    } else if (K === 0 || A[i] >= 0) {
      break
    }
  }
  if (K % 2 === 1) {
    A.sort((a, b) => a - b)
    A[0] = -A[0]
  }
  let sum = 0
  for (let j = 0; j < A.length; j++) {
    sum += A[j]
  }
  return sum
};
