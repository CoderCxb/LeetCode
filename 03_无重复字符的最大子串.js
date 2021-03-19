// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 *
 * @param {string} s 接收的字符串
 * @return {number} 返回最长无重复字符子串的长度
 */
var lengthOfLongestSubstring = function (s) {
	let maxlen = 0;
	let sArr = [];
	for (let index = 0; index < s.length; index++) {
		if (sArr.includes(s[index])) {
			sArr.push(s[index]);
			sArr = sArr.slice(sArr.indexOf(s[index]) + 1);
		} else {
			sArr.push(s[index]);
		}
		maxlen = Math.max(sArr.length, maxlen);
	}
	return maxlen;
};

console.log(lengthOfLongestSubstring(''));
