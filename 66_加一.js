// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 输入：digits = [0]
// 输出：[1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	// 1. 是否进1
	let add = 0;
	// 2. 遍历数组
	for (let index = digits.length - 1; index >= 0; index--) {
		// 3. 计算当前的值 num + 是否进1
		num = digits[index] + add;
		// 4. 最后一个元素 + 1
		if (index === digits.length - 1) {
			num += 1;
		}
		// 5. 重置进位
		add = 0;
		// 6. 当前值%10
		digits[index] = (num + add) % 10;
		// 7. 是否进位
		if (num + add > 9) {
			add = 1;
		}
	}
	// 8. 是否进位
	if (add > 0) {
		digits.unshift(1);
	}
	// 9. 返回结果
	return digits;
};

console.log(plusOne([9]));
