// 28. 实现 strStr()

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

//  输入：haystack = "hello", needle = "ll"
// 输出：2

// 思路: 字符串的比较,值相同就会==,遍历数组 获取每一个index到index+needle.length下标的字符串与needle比较即可

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// 1. 特殊情况处理
	if (haystack == needle) return 0;
	// 2. 默认result为-1
	let result = -1;
	// 3. 循环
	for (let index = 0; index < haystack.length; index++) {
		// 4. 比较字符串的值
		if (haystack.slice(index, index + needle.length) === needle) {
			result = index;
			break;
		}
	}
	// 5. 返回结果
	return result;
};

console.log(strStr('aaa', 'a'));
