// 509. 斐波那契数
// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。

// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
// 示例 2：

// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
// 示例 3：

// 输入：4
// 输出：3

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n === 0) return 0;
	if (n === 1 || n === 2) return 1;
	let result = 0;
	let pre = 1,
		next = 1;
	for (let i = 2; i < n; i++) {
		result = pre + next;
		pre = next;
		next = result;
	}
	return next;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
