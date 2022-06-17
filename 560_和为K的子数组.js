// 560. 和为K的子数组
// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

// 枚举方式会超时
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0;
    for (let end = start; end >= 0; --end) {
      sum += nums[end];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

console.log(subarraySum([4, 4, 5, 3, 7, 1, 2, 6, 10, 3], 13));
console.log(subarraySum([-1, -1, 1], 0));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
console.log(subarraySum([1, -1, 0], 0));
