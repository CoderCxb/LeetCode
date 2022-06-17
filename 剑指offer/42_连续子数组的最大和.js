// 剑指 Offer 42. 连续子数组的最大和
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n),空间O(1)。

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 思路:当前面的和<0时,将sum重新计算,因为小于0只会让值更小
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 1. 初始化最大值
  let max = -Infinity;
  // 2. 和
  let sum = 0;
  // 3. 遍历
  for (let index = 0; index < nums.length; index++) {
    let num = nums[index];
    // 4. 计算和
    sum += num;
    // 5. 比较 max sum 以及当前值
    max = Math.max(max, sum, num);
    // 6. sum<0，则重置sum
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

var maxSubArray = function (nums) {
  if (!nums) return 0;
  let max = Number.MIN_SAFE_INTEGER;
  let preMax = Number.MIN_SAFE_INTEGER;
  nums.forEach((num) => {
    preMax = Math.max(preMax + num, num);
    max = Math.max(max, preMax);
  });
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, -2, 3, 5, -2, 6, -1]));
