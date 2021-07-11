// 14. 最长公共前缀
// 难度:简单
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 先找到第一个和第二个的公共前缀 然后使用公共前缀和下一个字符串找公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// 1. 若strs是空数组 则直接返回 ''
	if (strs.length === 0) return '';
	// 2. 当前比较到第几个字符
	let count = 0;
	// 3. 返回的结果
	let result = '';
	// 4. 循环
	while (true) {
		for (let index = 0; index < strs.length; index++) {
			// 5. 若字符不存在或者不相等 直接返回result
			if (!strs[index][count] || strs[index][count] !== strs[0][count]) {
				return result;
				// 6. 字符存在并且相等
			} else {
				// 7. 比较到length-1 说明都相等 把这个字符加到result
				if (index === strs.length - 1) result += strs[0][count];
			}
		}
		count++;
	}
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
