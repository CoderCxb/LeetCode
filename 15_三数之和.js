// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let start=0,end=nums.length-1;
  let result=[];
  while(start!=end-2){
    for(let i=start+1;i<end-1;i++){
      console.log(nums[start],nums[i],nums[end]);
      if(nums[start]+nums[end]+nums[i]===0){
        result.push[nums[start],nums[end],nums[i]];
      }
    }
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));