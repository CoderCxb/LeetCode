// 674. 最长连续递增序列
// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

// 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  // 1. 初始化最大值 和 升序子数列的下标
  let max=0;
  let start=0;
  // 2. 使用reduce遍历(因为要和后一项做比较 所以使用reduce)
  nums.reduce((pre,next,index)=>{
    // 3. next<=pre 则不符合 移动start
    if(next<=pre){
      start=index;
    // 4. 满足时 记录长度
    }else{
      max=Math.max(max,index-start)
    }
    return next;
  })
  // 5. 返回结果
  return max+1;
};

console.log(findLengthOfLCIS([1,3,5,6,7]));
console.log(findLengthOfLCIS([1,1,1,1]));