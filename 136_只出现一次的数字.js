// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 输入: [2,2,1]
// 输出: 1

// 输入: [4,1,2,1,2]
// 输出: 4
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// 1. 要使用0做初始值开始异或, 异或是通过二进制去计算 所以0不会影响最终结果
	let result = 0;
	// 2. 遍历异或
	for (const num of nums) {
		result = result ^ num;
	}
	// 3. 返回结果
	return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
