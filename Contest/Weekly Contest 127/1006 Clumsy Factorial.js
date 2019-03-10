/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {

  let clumsyRegion = (start, len, flag) => {
    if (len === 1) return flag ? 1 : -1
    if (len === 2) return flag ? 2 : -2
    if (len === 3) return flag ? 6 : -6
    if (len === 4) return flag ? Math.floor(start * (start - 1) / (start - 2)) + (start - 3) : -Math.floor((start * (start - 1) / (start - 2))) + (start - 3)
  }
  let sum = 0
  var i = N
  for (; i > 3; i -= 4) {
    sum += clumsyRegion(i, 4, i === N)
  }
  if (i) {
    sum += clumsyRegion(i, i, i === N)
  }
  return sum
};
