/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  S = S.split('')

  while (S.length) {
    let len = S.length
    let flag = false
    if (len <= 2) {
      return false
    }
    for (let i = 2; i < len; i++) {
      if (S[i] === 'c' && S[i - 1] === 'b' && S[i - 2] === 'a') {
        flag = true
        S[i] = false
        S[i-1] = false
        S[i-2] = false
      }
    }
    S = S.filter(item => item)
    if (flag === false) {
      return false
    }
  }
  return true

};