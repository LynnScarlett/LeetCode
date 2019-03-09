/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let max = -2
  let i = 0,j=0
  let sw = num => num === 0 ? 1 : 0 
  let zeroNum = sw(A[0])

  while( j < A.length){
    
    if (zeroNum <= K) {
      max = Math.max(max,j-i)
      j++
      zeroNum += sw(A[j])
    } else if (zeroNum > K) {
      zeroNum -= sw(A[i])
      i++
    }
  }
  return max+1
}