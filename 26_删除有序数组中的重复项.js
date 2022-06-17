// 26. 删除有序数组中的重复项

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 思路: 不删除数组的元素 只是单纯的替换值而已 这样效率比较高
// 并且因为是升序的 所以只需要判断和最后一个元素的关系即可

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 1. 特殊情况
  if (nums.length === 0) return 0;
  // 2. preIndex记录下标 preNum记录不重复的最后一个值
  let preIndex = 0,
    preNum = nums[0];
  // 3. 循环
  for (let index = 0; index < nums.length; index++) {
    // 4. 不相等的时候
    if (nums[index] !== preNum) {
      // 5. 替换 nums[preIndex]的值
      nums[++preIndex] = nums[index];
      // 6. 更新最新的preNum
      preNum = nums[index];
    }
  }
  // 7. 返回 preIndex+1
  return preIndex + 1;
};
console.log(removeDuplicates([1, 1, 2, 2, 5, 6, 7, 8]));
