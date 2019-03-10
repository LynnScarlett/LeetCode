/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  let dic = Array(7).fill(0)

  for (let i = 0; i < A.length; i++) {
    dic[A[i]]++
    dic[B[i]]++
  }
  var j = 1
  for (; j < 7; j++) {
    if (dic[j] >= A.length) {
      break
    }
  }
  if (dic[j] < A.length) {
    return 1
  }
  var sumA = 0
  var sumB = 0
  for (let k = 0; k < A.length; k++) {
    if (A[k] === j && B[k] !== j) {
      sumB++
    } else if (A[k] !== j && B[k] === j) {
      sumA++
    } else if (A[k] !== j && B[k] !== j) {
      return -1
    }
  }
  return sumA < sumB ? sumA : sumB
};
