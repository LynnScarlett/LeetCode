/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let commonArr = A.shift().split('')

  while (A.length) {
    let node = A.shift().split('')
    let newCommon = []
    for (let item of node) {
      for (let i = 0; i < commonArr.length; i++){
        if (commonArr[i] === item) {
          newCommon.push(item)
          commonArr.splice(i, 1)
          break
        }
      }
    }
    commonArr = newCommon
  }
  return commonArr
};