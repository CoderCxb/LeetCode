// 45. 跳跃游戏 II
// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

// 示例 1:

// 输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 1. 记录步数
  let steps = 0;
  // 2. 记录步数对应的最大跳跃终点, 当index<end时,steps不需要++
  // 例如 当开始跳2步 因此 2前面的index步数都是1
  let end = 0;
  // 3. 最远距离
  let max = 0;
  // 4. 不包含length-1
  for (let index = 0; index < nums.length - 1; index++) {
    // 5. 计算最远距离
    max = Math.max(index + nums[index], max);
    // 6. index大于等于上次跳跃最大终点时, 说明再次进行跳跃了
    if (index >= end) {
      // 7. 记录每次跳跃的最大终点
      end = max;
      // 8. 步数++
      steps++;
    }
  }
  return steps;
};

console.log(jump([2, 3, 1, 1, 4]));
