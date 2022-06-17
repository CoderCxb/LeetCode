// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1. 最大值
  let max = 0;
  for (let index = 0; index < nums.length; index++) {
    // 2. 最大值为 index+value和max中的大值
    max = Math.max(index + nums[index], max);
    // 3. 最大值比下标还小 说明前面能跳的最后的 都没有超过这个index 所以不可能达到最后
    if (max <= index) {
      return false;
    }
  }
  // 4. max到达最后一个下标
  return max >= nums.length - 1;
};

console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([0]));
