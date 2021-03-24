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
	let result = [];
	// 排序
	nums.sort((a, b) => a - b);
	// 长度少于3或者传入null 则直接返回空数组
	if (nums.length < 3 || nums === null) return [];
	// 第一层遍历
	for (let index = 0; index < nums.length; index++) {
		// 当前值大于0 直接返回 因为后面的也不可能了
		if (nums[index] > 0) break;
		// 去除后续重复的
		if (index > 0 && nums[index - 1] == nums[index]) continue;
		// 头尾双指针下标
		let start = index + 1,
			end = nums.length - 1;
		// 头尾指针下标相等 说明此次遍历结束
		while (start < end) {
			// 求和
			let sum = nums[index] + nums[start] + nums[end];
			// 和为0
			if (sum === 0) {
				// 添加到结果数组
				result.push([nums[index], nums[start], nums[end]]);
				// 前后去重
				while (nums[start] == nums[start + 1]) start++;
				while (nums[end] == nums[end - 1]) end--;
				// 去重完还需要再移动一次
				start++;
				end--;
				// 和大于0 则尾下标前移
			} else if (sum > 0) {
				end--;
			} else {
				// 和小于0 则头下标后移
				start++;
			}
		}
	}
	return result;
};

console.log(threeSum([0, 0, 0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
