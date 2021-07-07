// 409. 最长回文串
// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// 注意:
// 假设字符串的长度不会超过 1010。

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	// 1. 特殊情况直接返回
	if (s.length <= 1) return s.length;
	// 2. 初始化
	let maxLen = 0;
	let map = {};
	// 3. 记录次数
	for (const c of s) {
		map[c] = map[c] ? map[c] + 1 : 1;
	}
	// 4. 将所有大于1的次数的2的倍数部分加起来 如5次,则+4
	for (const c of Object.keys(map)) {
		if (map[c] > 1) {
			maxLen += Math.floor(map[c] / 2) * 2;
		}
	}
	// 5. 判断和s长度的关系,如果相等,则直接返回,小于的时候可以+1(任意加一个字符)
	return maxLen < s.length ? maxLen + 1 : maxLen;
};

console.log(longestPalindrome('bb'));
