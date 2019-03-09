/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  dfs(nums,[],res)
  return res
  
  function dfs(nums,ans,results){
    if(nums.length===0){
      results.push(Array.prototype.slice.apply(ans))
      return
    }
    let len = nums.length
    for(let i = 0;i<len;i++){
      ans.push(nums[i])
      dfs(nums.slice(0,i).concat(nums.slice(i+1,len)),ans,results)
      ans.pop()
    }
  }
  
};

// related to a DISCUSSION solution
