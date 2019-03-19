/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  let max = weights.reduce((x, y) => x + y)
  let min = Math.max(...weights)

  function binarySearch(start, end) {
    let mid = Math.floor((start + end) / 2)
    let total = 0
    let day = 1
    for (let i = 0; i < weights.length; i++){
      if (total + weights[i] <= mid) {
        total += weights[i]
      } else {
        total = 0
        i--
        day++
        if (day > D) {
          if(start===end) return 0
          return binarySearch(mid+1,end)
        }
      }
    }
    if(start === end) return start
    return binarySearch(start,mid1)
  }

  return binarySearch(min,max)
};