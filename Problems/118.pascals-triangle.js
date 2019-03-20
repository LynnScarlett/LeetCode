/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.87%)
 * Total Accepted:    233.8K
 * Total Submissions: 521K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  if (numRows === 2) {
    return [[1], [1, 1]]
  }
  let res = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    let ins = []
    for (let j = 1; j < res[i - 1].length; j++) {
      ins.push(res[i - 1][j] + res[i - 1][j - 1])
    }
    res.push([1, ...ins, 1])
  }
  return res
}
