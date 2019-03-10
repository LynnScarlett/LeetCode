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