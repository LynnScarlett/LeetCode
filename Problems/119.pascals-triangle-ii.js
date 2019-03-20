/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (42.38%)
 * Total Accepted:    189.3K
 * Total Submissions: 446.7K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let numRows = rowIndex + 1
  if (numRows === 1) {
    return [1]
  }
  if (numRows === 2) {
    return [1, 1]
  }
  let res = [1, 1]
  for (let i = 2; i < numRows; i++) {
    let ins = []
    for (let j = 1; j < res.length; j++) {
      ins.push(res[j] + res[j - 1])
    }
    res = [1, ...ins, 1]
  }
  return res
};