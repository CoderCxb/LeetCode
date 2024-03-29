// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arr = new Array(nums.length).fill(1);
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    let n = i;
    while (n-- > 0) {
      if (nums[i] > nums[n]) {
        arr[i] = Math.max(arr[i], arr[n] + 1);
      }
    }
  }
  return Math.max.apply(null, arr);
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
