// 485. 最大连续1的个数
// 给定一个二进制数组， 计算其中最大连续 1 的个数。

// 示例：

// 输入：[1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	// 1.初始化
	let result = 0;
	let count = 0;
	// 2. 遍历
	for (let i = 0; i < nums.length; i++) {
		// 3. 如果值为0 则清空count
		if (nums[i] === 0) {
			count = 0;
			// 4. 否则累加
		} else {
			count++;
		}
		// 5. 获取大值
		result = Math.max(count, result);
	}
	// 6. 返回结果
	return result;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 1]));
