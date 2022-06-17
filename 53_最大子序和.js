// 53. 最大子序和

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
/**
 * @param {number[]} nums
 * @return {number}
 * [-2,1,-3,4,-1,2,1,-5,4]
 * 以-2为最后一个元素的数组最大值   max(0-2,-2)   -2
 * 以 1为最后一个元素的数组最大值   max(-2+1,1)   1
 * 以-3为最后一个元素的数组最大值   max(1-3,-3)   -2
 * 以 4为最后一个元素的数组最大值   max(-2+4,4)   4
 * ... 以此类推
 */
// 核心思想：从左往右 计算以每一个元素为最后一个元素的数组的最大值
// 即 preMax+x 和 x中的最大值
function maxSubArray(nums) {
  let max = nums[0]; // 最大值
  let preMax = 0; // 遍历到的元素结尾的数组的最大值
  for (const num of nums) {
    // preMax+x和num 就可以获取到当前元素结尾的数组的最大值
    preMax = Math.max(preMax + num, num);
    // 存储最大值
    max = Math.max(preMax, max);
  }
  return max;
}

console.log(maxSubArray([2, -1, 3, -1])); // 4
console.log(maxSubArray([-2, 1])); // 1
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])); // 6
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
