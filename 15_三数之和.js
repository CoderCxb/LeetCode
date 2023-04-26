// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 思路(双指针): 用于替换嵌套两层的循环
// 这个方法就是我们常说的「双指针」，当我们需要枚举数组中的两个元素时，如果我们发现随着第一个元素的递增，第二个元素是递减的，那么就可以使用双指针的方法，将枚举的时间复杂度从 O(N^2)减少至O(N)。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 存储结果
  let res = [];
  // 排序
  let sortedNums = nums.sort((a, b) => a - b);
  // 外层遍历
  for (let index = 0; index < sortedNums.length; index++) {
    // 双指针
    let start = index + 1;
    let end = sortedNums.length - 1;
    while (start < end) {
      // 计算和
      let sum = sortedNums[start] + sortedNums[end] + sortedNums[index];
      if (sum === 0) {
        res.push([sortedNums[index], sortedNums[start], sortedNums[end]]);
        // 双指针收缩
        start++;
        end--;
        // 去重, 三个指针如果和 前/后 重复,只跳过
        while (sortedNums[start - 1] === sortedNums[start]) start++;
        while (sortedNums[end] === sortedNums[end + 1]) end--;
        while (sortedNums[index] === sortedNums[index + 1]) index++;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  return res;
};

console.log(threeSum([0, 0, 0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
