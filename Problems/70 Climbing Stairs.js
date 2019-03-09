/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = new Array(n + 1)
  arr[1] = 1
  arr[2] = 2
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};
