// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 输入：[3,2,3]
// 输出：3

// 输入：[2,2,1,1,1,2,2]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	// 超过一般的数,只要排序以后,中间的元素就是了
	return nums.sort()[Math.floor(nums.length / 2)];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
