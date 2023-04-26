// 二分查找-II
// 请实现有重复数字的升序数组的二分查找
// 给定一个 元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的第一个出现的target，如果目标值存在返回下标，否则返回 -1

// 输入：
// [1,2,4,4,5],4
// 复制
// 返回值：2
// 说明： 从左到右，查找到第1个为4的，下标为2，返回2

// 输入：
// [1,2,4,4,5],3
// 返回值：-1

function search(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let midIndex = Math.floor((low + high) / 2);
    let mid = nums[midIndex];
    if (mid > target) {
      high = midIndex - 1;
    } else if (mid < target) {
      low = midIndex + 1;
    } else {
      let result = midIndex;
      while (nums[result - 1] === target) {
        result--;
      }
      return result;
    }
  }
  return -1;
}
