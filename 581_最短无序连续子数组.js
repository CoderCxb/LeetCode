// 581. 最短无序连续子数组

// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。
// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。


/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let sortNums=[...nums].sort((pre,next)=>pre-next);
  let start,end;
  for (let index = 0; index < nums.length; index++) {
    if(start===undefined&&nums[index]!==sortNums[index]){
      start=index;
    }
    if(nums[index]!==sortNums[index]){
      end=index;
    }
  }
  return end-start?end-start+1:0;
};

console.log(findUnsortedSubarray([3,2,1]));