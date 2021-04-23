// 18. 四数之和

// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：答案中不可以包含重复的四元组。

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// 思路：双指针 和三数之和一样 多一层嵌套
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums.sort((a, b) => a - b);
	let result = new Map();
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let start = j + 1,
				end = nums.length - 1;
			while (start < end) {
				let sum = nums[i] + nums[j] + nums[start] + nums[end];
				if (sum === target) {
					result.set('' + nums[i] + nums[j] + nums[start] + nums[end], [
						nums[i],
						nums[j],
						nums[start],
						nums[end],
					]);
					start++;
				} else if (sum > target) {
					end--;
				} else {
					start++;
				}
			}
		}
	}
	return [...result.values()];
};

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
