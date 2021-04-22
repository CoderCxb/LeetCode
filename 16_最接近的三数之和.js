// 16. 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 思路：双指针

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	// 1. 先排序
	nums.sort((a, b) => a - b);
	// 2. 给result赋初始值 这个值是第一次循环时的值
	let result = nums[0] + nums[1] + nums[2];
	// 3. 第一次遍历
	for (let index = 0; index < nums.length; index++) {
		// 4. 设置头尾指针的索引
		let start = index + 1,
			end = nums.length - 1;
		// 5. 循环继续的条件
		while (start < end) {
			// 6. 求和
			let sum = nums[index] + nums[start] + nums[end];
			// 7. 当前sum和target的差值比之前的小 则将sum赋值给result
			if (Math.abs(target - sum) < Math.abs(target - result)) {
				result = sum;
			}
			// 8. 更改索引
			if (sum > target) {
				end--;
			} else if (sum < target) {
				start++;
			} else {
				return sum;
			}
		}
	}
	return result;
};

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
