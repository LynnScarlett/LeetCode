/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (33.83%)
 * Total Accepted:    291.8K
 * Total Submissions: 709.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length
  if (len < 3) return 0

  nums.sort((a, b) => a - b)

  let closest = nums[0] + nums[1] + nums[2]

  for (let l = 0; l < len - 2; l++) {
    if (l > 0 && nums[l] === nums[l - 1]) continue
    let r = len - 1
    let m = l + 1
    while (m < r) {
      let current = nums[l] + nums[m] + nums[r]
      if (current === target) return current
      if (Math.abs(target - current) < Math.abs(target - closest)) {
        closest = current
      }
      if (current < target) {
        m++
      } else if (current > target) {
        r--
      }
    }
  }
  return closest
};
