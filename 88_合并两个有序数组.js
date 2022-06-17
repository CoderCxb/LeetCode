// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

// 思路:
// 刚开始的思路是,使用双指针，从头开始不断比较，将小的不断后nums1做push操作
// 但是这样写需要记录很多东西 比较复杂

// 参考别人的做法:本质是也是比较，但是是反向的，也就是说，是从nums1和nums2的末尾开始比较
// 然后从m+n-1，也就是nums1最大长度开始往前赋值

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1;
  let i1 = m - 1,
    i2 = n - 1;
  while (len >= 0) {
    if (nums1[i1] >= nums2[i2] || nums2[i2] === undefined) {
      nums1[len--] = nums1[i1--];
    } else if (nums2[i2] >= nums1[i1] || nums1[i1] === undefined) {
      nums1[len--] = nums2[i2--];
    }
  }
  return nums1;
};

console.log(merge([1, 5, 8, 9], 4, [2, 3, 4, 6, 8], 5));
console.log(merge([], 0, [1], 1));
