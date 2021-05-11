// 1004. 最大连续1的个数 III
// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。

// 返回仅包含 1 的最长（连续）子数组的长度。

// 示例 1：

// 输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释：
// [1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
	// 1. 初始化滑动窗口
	let left = 0,
		right = 0;
	// 2. 结果
	let result = 0;
	// 3. 0的数量
	let zeros = 0;
	// 4. 遍历
	for (; right < nums.length; right++) {
		// 5. 当字符为0时
		if (nums[right] === 0) {
			// 6. zeros++
			zeros++;
		}
		// 7. 当zeros超过k,这时需要调整left的位置,使得zeros不超过k
		while (zeros > k) {
			// 8. 如果left++移除的数字为0,则zero--
			if (nums[left] === 0) {
				zeros--;
			}
			// 9. left不断移动
			left++;
		}
		// 10. 记录result
		result = right - left + 1 > result ? right - left + 1 : result;
	}
	// 11. 返回result
	return result;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], 2));
