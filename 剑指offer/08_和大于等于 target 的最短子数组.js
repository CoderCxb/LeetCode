// 剑指 Offer II 008. 和大于等于 target 的最短子数组
// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

// 思路: 双指针start和end记录头尾, sum记录到start到end的和

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0; // start到end的和
  let start = 0,
    end = 0;
  // 记录最短的length
  let minLen = Number.MAX_SAFE_INTEGER;
  while (end < nums.length) {
    // 累加
    sum += nums[end];
    // 当和大于等于tartget时
    if (sum >= target) {
      while (sum >= target) {
        // 取minLen 和 end-start + 1中的小值
        minLen = Math.min(minLen, end - start + 1);
        // start后移并从和中减去start对应的值
        sum -= nums[start];
        start++;
      }
    }
    // end后移
    end++;
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
