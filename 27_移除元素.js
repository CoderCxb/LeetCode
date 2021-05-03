// 27. 移除元素

// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
// 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

// 思路:遍历移动元素即可

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	// 1. 特殊情况
	if (nums.length === 0) return 0;
	// 2. preIndex记录下标
	let preIndex = 0;
	// 3. 循环
	for (let index = 0; index < nums.length; index++) {
		// 4. 不相等的时候
		if (nums[index] !== val) {
			// 5. 替换 nums[preIndex]的值 通过preIndex++
			nums[preIndex++] = nums[index];
		}
	}
	// 6. 返回 preIndex
	return preIndex;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
