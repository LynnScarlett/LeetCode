/**
 * @param {number} N
 * @return {number}
 */

 /**
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function(N) {
  function permutations(m, n) {
    let res = 1
    if (m < n) {
      n = m-1
    }
    while (n--) {
      res = res*(m--)
    }
    return res
  }

  let sum = 0

  let str = `${N}`.split('')
  for (let i = 0; i < str.length - 1; i++){
    sum += 9*permutations(9, i)
  }

  sum += (str[0]-1)*permutations(9,str.length-1)
  for (let i = 1; i < str.length; i++){
    sum += (str.length - i - 1) * permutations(9, str.length - i - 1)
    
    // 此处应该排除前面出现过的数字
  }

  return N-sum
};


// 超时

// var numDupDigitsAtMostN = function (N) {
//   let res = 0
//   for (let i = 1; i <= N; i++){
//     let hash = []
//     let str = i + ''
//     for (let j = 0; j < str.length; j++){
//       if (!hash[+str[j]]) {
//         hash[+str[j]] = true
//       } else {
//         res++
//         break
//       }
//     }
//   }
//   return res
// };
