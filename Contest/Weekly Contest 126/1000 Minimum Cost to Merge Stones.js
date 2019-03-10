// /**
//  * @param {number[]} stones
//  * @param {number} K
//  * @return {number}
//  */
// var mergeStones = function (stones, K) {
//   let len = stones.length
//   if (K !== 2 && len % (K - 1) !== 1) {
//     return -1
//   }

//   let dp = Array(len).fill([])
//   let tmp = 0
//   let sum = stones.map((item, index) => {
//     return tmp+=item
//   })

//   for (let step = K; step <= len; step++){
//     for (let start = 0; start + step <= len; start++){
//       let end = start+step-1
//       dp[start][end] = Infinity
//       for (let mid = start; mid < end; mid += K - 1){
//         dp[start][end] = Math.min(dp[start][end],dp[start][mid]+dp[mid][end])
//       }
//       if ((end - start) % (K - 1) === 0) {
//         dp[start][end]+=sum[end]-(start===0?0:sum[start])
//       }
//     }
//   }
//   return dp[0][len-1]
// };