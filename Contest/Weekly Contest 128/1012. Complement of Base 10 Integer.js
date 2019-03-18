/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let i = 1
  while (N > 2 ** i - 1) {
    i++
  }
  return 2**i-1-N
};
