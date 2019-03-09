/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let x = parseInt(str)
  if(isNaN(x)) return 0
  if(x>=2147483647) return 2147483647
  else if(x<=-2147483648) return -2147483648
  else return x
};
